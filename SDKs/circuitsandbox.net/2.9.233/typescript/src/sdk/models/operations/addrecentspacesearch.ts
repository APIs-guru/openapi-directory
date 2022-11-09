import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AddRecentSpaceSearchRequestBodyScopeEnum {
    All = "ALL"
,    Spaces = "SPACES"
,    Topicby = "TOPICBY"
,    Files = "FILES"
,    Tags = "TAGS"
,    Labels = "LABELS"
,    Date = "DATE"
}


export class AddRecentSpaceSearchRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=endTime;" })
  endTime?: Date;

  @Metadata({ data: "form, name=scope;" })
  scope: AddRecentSpaceSearchRequestBodyScopeEnum;

  @Metadata({ data: "form, name=searchTerm;" })
  searchTerm: string;

  @Metadata({ data: "form, name=startTime;" })
  startTime?: Date;
}


export class AddRecentSpaceSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddRecentSpaceSearchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddRecentSpaceSearchRequestBody;

  @Metadata()
  security: AddRecentSpaceSearchSecurity;
}


export class AddRecentSpaceSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
