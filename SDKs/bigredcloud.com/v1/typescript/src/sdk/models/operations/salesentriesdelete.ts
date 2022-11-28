import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SalesEntriesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesEntriesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class SalesEntriesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesEntriesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: SalesEntriesDeleteQueryParams;
}


export class SalesEntriesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesEntriesDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
