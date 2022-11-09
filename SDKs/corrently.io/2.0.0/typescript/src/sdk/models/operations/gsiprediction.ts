import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GsiPredictionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}


export class GsiPredictionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GsiPredictionQueryParams;
}


// GsiPrediction200ApplicationJsonLocation
/** 
 * Standarized location info sourced for prediction
**/
export class GsiPrediction200ApplicationJsonLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}


// GsiPrediction200ApplicationJsonMatrixH0
/** 
 * Indicates number of hours a device should run
**/
export class GsiPrediction200ApplicationJsonMatrixH0 extends SpeakeasyBase {
  @Metadata({ data: "json, name=avg_1" })
  avg1?: string;

  @Metadata({ data: "json, name=avg_2" })
  avg2?: string;

  @Metadata({ data: "json, name=avg_3" })
  avg3?: string;
}


// GsiPrediction200ApplicationJsonMatrix
/** 
 * Device switching recommendation.
**/
export class GsiPrediction200ApplicationJsonMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=h0" })
  h0?: GsiPrediction200ApplicationJsonMatrixH0;
}


export class GsiPrediction200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=forecast", elemType: shared.ForecastItem })
  forecast?: shared.ForecastItem[];

  @Metadata({ data: "json, name=location" })
  location?: GsiPrediction200ApplicationJsonLocation;

  @Metadata({ data: "json, name=matrix" })
  matrix?: GsiPrediction200ApplicationJsonMatrix;
}


export class GsiPredictionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gsiPrediction200ApplicationJsonObject?: GsiPrediction200ApplicationJson;
}
