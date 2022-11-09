import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2GetRecommendedGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=createDateRange" })
  createDateRange: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;
}


export class GroupV2GetRecommendedGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetRecommendedGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetRecommendedGroupsPathParams;

  @Metadata()
  security: GroupV2GetRecommendedGroupsSecurity;
}


export class GroupV2GetRecommendedGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
