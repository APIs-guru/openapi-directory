import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartDetailedSpaceSearchScopeEnum {
    All = "ALL"
,    Spaces = "SPACES"
,    Topicby = "TOPICBY"
,    Files = "FILES"
,    Tags = "TAGS"
,    Labels = "LABELS"
,    Date = "DATE"
}


export class StartDetailedSpaceSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: StartDetailedSpaceSearchScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchId" })
  searchId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=spaceId" })
  spaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;
}


export class StartDetailedSpaceSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class StartDetailedSpaceSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StartDetailedSpaceSearchQueryParams;

  @Metadata()
  security: StartDetailedSpaceSearchSecurity;
}


export class StartDetailedSpaceSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  spaceSearchResultDetailedBacks?: any[];

  @Metadata()
  statusCode: number;
}
