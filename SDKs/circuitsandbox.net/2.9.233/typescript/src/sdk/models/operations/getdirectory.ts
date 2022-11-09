import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDirectoryFilterEnum {
    None = "NONE"
,    Joined = "JOINED"
,    Requested = "REQUESTED"
,    Open = "OPEN"
,    Closed = "CLOSED"
,    NotJoinedRequested = "NOT_JOINED_REQUESTED"
}

export enum GetDirectorySortByEnum {
    LastContent = "LAST_CONTENT"
,    Name = "NAME"
,    NumberOfUsers = "NUMBER_OF_USERS"
,    CreationDate = "CREATION_DATE"
}

export enum GetDirectorySortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class GetDirectoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: GetDirectoryFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagePointer" })
  pagePointer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy: GetDirectorySortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder: GetDirectorySortOrderEnum;
}


export class GetDirectorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDirectoryQueryParams;

  @Metadata()
  security: GetDirectorySecurity;
}


export class GetDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  directoryResult?: any;

  @Metadata()
  statusCode: number;
}
