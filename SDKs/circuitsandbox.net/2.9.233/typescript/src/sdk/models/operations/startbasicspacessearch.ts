import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartBasicSpacesSearchScopeEnum {
    All = "ALL"
,    Spaces = "SPACES"
,    Topicby = "TOPICBY"
,    Files = "FILES"
,    Tags = "TAGS"
,    Labels = "LABELS"
,    Date = "DATE"
}


export class StartBasicSpacesSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endTime" })
  endTime?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prioritySpaces" })
  prioritySpaces?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: StartBasicSpacesSearchScopeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchTerm" })
  searchTerm: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTime" })
  startTime?: Date;
}


export class StartBasicSpacesSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class StartBasicSpacesSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StartBasicSpacesSearchQueryParams;

  @Metadata()
  security: StartBasicSpacesSearchSecurity;
}


export class StartBasicSpacesSearchResponse extends SpeakeasyBase {
  @Metadata()
  basicSearchResult?: any;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
