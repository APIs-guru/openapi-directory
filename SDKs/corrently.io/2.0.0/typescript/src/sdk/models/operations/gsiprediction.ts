import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GsiPredictionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


// GsiPrediction200ApplicationJsonLocation
/** 
 * Standarized location info sourced for prediction
**/
export class GsiPrediction200ApplicationJsonLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


// GsiPrediction200ApplicationJsonMatrixH0
/** 
 * Indicates number of hours a device should run
**/
export class GsiPrediction200ApplicationJsonMatrixH0 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_1" })
  avg1?: string;

  @SpeakeasyMetadata({ data: "json, name=avg_2" })
  avg2?: string;

  @SpeakeasyMetadata({ data: "json, name=avg_3" })
  avg3?: string;
}


// GsiPrediction200ApplicationJsonMatrix
/** 
 * Device switching recommendation.
**/
export class GsiPrediction200ApplicationJsonMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=h0" })
  h0?: GsiPrediction200ApplicationJsonMatrixH0;
}


export class GsiPrediction200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forecast", elemType: shared.ForecastItem })
  forecast?: shared.ForecastItem[];

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: GsiPrediction200ApplicationJsonLocation;

  @SpeakeasyMetadata({ data: "json, name=matrix" })
  matrix?: GsiPrediction200ApplicationJsonMatrix;
}


export class GsiPredictionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GsiPredictionQueryParams;
}


export class GsiPredictionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gsiPrediction200ApplicationJsonObject?: GsiPrediction200ApplicationJson;
}
