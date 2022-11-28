import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartDetailedSpaceSearchScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}


export class StartDetailedSpaceSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: StartDetailedSpaceSearchScopeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchId" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spaceId" })
  spaceId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;
}


export class StartDetailedSpaceSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class StartDetailedSpaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StartDetailedSpaceSearchQueryParams;

  @SpeakeasyMetadata()
  security: StartDetailedSpaceSearchSecurity;
}


export class StartDetailedSpaceSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spaceSearchResultDetailedBacks?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
