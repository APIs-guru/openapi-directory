import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecipeScanQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype" })
  devicetype?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: boolean;
}


export class RecipeScanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RecipeScanQueryParams;
}


export class RecipeScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
