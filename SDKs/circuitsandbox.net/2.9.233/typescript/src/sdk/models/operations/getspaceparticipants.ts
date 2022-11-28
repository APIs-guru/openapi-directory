import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpaceParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetSpaceParticipantsFilterTypeEnum {
    None = "NONE",
    AccessType = "ACCESS_TYPE",
    Role = "ROLE",
    State = "STATE"
}

export enum GetSpaceParticipantsSortByEnum {
    DisplayName = "DISPLAY_NAME",
    Name = "NAME",
    FirstName = "FIRST_NAME"
}

export enum GetSpaceParticipantsSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class GetSpaceParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterType" })
  filterType: GetSpaceParticipantsFilterTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterValue" })
  filterValue?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfResults" })
  numberOfResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchPointer" })
  searchPointer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy: GetSpaceParticipantsSortByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder: GetSpaceParticipantsSortOrderEnum;
}


export class GetSpaceParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSpaceParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpaceParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSpaceParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: GetSpaceParticipantsSecurity;
}


export class GetSpaceParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantsSearchResult?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
