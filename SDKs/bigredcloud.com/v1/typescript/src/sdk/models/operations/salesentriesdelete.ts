import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SalesEntriesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesEntriesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesEntriesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesEntriesDeletePathParams;

  @Metadata()
  queryParams: SalesEntriesDeleteQueryParams;
}


export class SalesEntriesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesEntriesDelete200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
