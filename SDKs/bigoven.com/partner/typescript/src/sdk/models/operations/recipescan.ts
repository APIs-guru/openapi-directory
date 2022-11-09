import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecipeScanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=devicetype" })
  devicetype?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lng" })
  lng?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=test" })
  test?: boolean;
}


export class RecipeScanRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RecipeScanQueryParams;
}


export class RecipeScanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
