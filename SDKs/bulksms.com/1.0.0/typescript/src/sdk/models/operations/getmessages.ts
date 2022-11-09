import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMessagesSortOrderEnum {
    Ascending = "ASCENDING"
}


export class GetMessagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetMessagesSortOrderEnum;
}


export class GetMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMessagesQueryParams;

  @Metadata()
  security: GetMessagesSecurity;
}


export class GetMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata()
  statusCode: number;
}
