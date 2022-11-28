import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AddRecentSpaceSearchRequestBodyScopeEnum {
    All = "ALL",
    Spaces = "SPACES",
    Topicby = "TOPICBY",
    Files = "FILES",
    Tags = "TAGS",
    Labels = "LABELS",
    Date = "DATE"
}


export class AddRecentSpaceSearchRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=endTime;" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "form, name=scope;" })
  scope: AddRecentSpaceSearchRequestBodyScopeEnum;

  @SpeakeasyMetadata({ data: "form, name=searchTerm;" })
  searchTerm: string;

  @SpeakeasyMetadata({ data: "form, name=startTime;" })
  startTime?: Date;
}


export class AddRecentSpaceSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddRecentSpaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddRecentSpaceSearchRequestBody;

  @SpeakeasyMetadata()
  security: AddRecentSpaceSearchSecurity;
}


export class AddRecentSpaceSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
