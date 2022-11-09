import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpaceParticipantsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetSpaceParticipantsFilterTypeEnum {
    None = "NONE"
,    AccessType = "ACCESS_TYPE"
,    Role = "ROLE"
,    State = "STATE"
}

export enum GetSpaceParticipantsSortByEnum {
    DisplayName = "DISPLAY_NAME"
,    Name = "NAME"
,    FirstName = "FIRST_NAME"
}

export enum GetSpaceParticipantsSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class GetSpaceParticipantsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filterType" })
  filterType: GetSpaceParticipantsFilterTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterValue" })
  filterValue?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy: GetSpaceParticipantsSortByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder: GetSpaceParticipantsSortOrderEnum;
}


export class GetSpaceParticipantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceParticipantsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpaceParticipantsPathParams;

  @Metadata()
  queryParams: GetSpaceParticipantsQueryParams;

  @Metadata()
  security: GetSpaceParticipantsSecurity;
}


export class GetSpaceParticipantsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  participantsSearchResult?: any;

  @Metadata()
  statusCode: number;
}
