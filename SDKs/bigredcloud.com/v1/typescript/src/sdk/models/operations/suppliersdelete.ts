import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SuppliersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SuppliersDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SuppliersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersDeletePathParams;

  @Metadata()
  queryParams: SuppliersDeleteQueryParams;
}


export class SuppliersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  suppliersDelete200ApplicationJsonObject?: Map<string, any>;
}
