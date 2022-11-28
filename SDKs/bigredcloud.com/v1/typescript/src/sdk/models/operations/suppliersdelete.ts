import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuppliersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SuppliersDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SuppliersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuppliersDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SuppliersDeleteQueryParams;
}


export class SuppliersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  suppliersDelete200ApplicationJsonObject?: Map<string, any>;
}
