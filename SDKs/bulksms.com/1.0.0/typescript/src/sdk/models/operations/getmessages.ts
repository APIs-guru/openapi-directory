import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMessagesSortOrderEnum {
    Ascending = "ASCENDING"
}


export class GetMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: GetMessagesSortOrderEnum;
}


export class GetMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMessagesQueryParams;

  @SpeakeasyMetadata()
  security: GetMessagesSecurity;
}


export class GetMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata()
  statusCode: number;
}
