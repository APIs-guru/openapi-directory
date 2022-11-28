import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDirectoryFilterEnum {
    None = "NONE",
    Joined = "JOINED",
    Requested = "REQUESTED",
    Open = "OPEN",
    Closed = "CLOSED",
    NotJoinedRequested = "NOT_JOINED_REQUESTED"
}

export enum GetDirectorySortByEnum {
    LastContent = "LAST_CONTENT",
    Name = "NAME",
    NumberOfUsers = "NUMBER_OF_USERS",
    CreationDate = "CREATION_DATE"
}

export enum GetDirectorySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class GetDirectoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetDirectoryFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagePointer" })
  pagePointer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy: GetDirectorySortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder: GetDirectorySortOrderEnum;
}


export class GetDirectorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDirectoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDirectoryQueryParams;

  @SpeakeasyMetadata()
  security: GetDirectorySecurity;
}


export class GetDirectoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  directoryResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
