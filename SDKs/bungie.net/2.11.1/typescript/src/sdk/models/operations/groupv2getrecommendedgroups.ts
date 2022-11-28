import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2GetRecommendedGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=createDateRange" })
  createDateRange: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;
}


export class GroupV2GetRecommendedGroupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetRecommendedGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetRecommendedGroupsPathParams;

  @SpeakeasyMetadata()
  security: GroupV2GetRecommendedGroupsSecurity;
}


export class GroupV2GetRecommendedGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
