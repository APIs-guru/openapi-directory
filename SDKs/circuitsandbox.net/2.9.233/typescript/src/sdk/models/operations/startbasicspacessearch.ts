import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartBasicSpacesSearchScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}


export class StartBasicSpacesSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prioritySpaces" })
  prioritySpaces?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: StartBasicSpacesSearchScopeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;
}


export class StartBasicSpacesSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class StartBasicSpacesSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StartBasicSpacesSearchQueryParams;

  @SpeakeasyMetadata()
  security: StartBasicSpacesSearchSecurity;
}


export class StartBasicSpacesSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  basicSearchResult?: any;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
