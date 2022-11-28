import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetCommunityProfileMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCommunityProfileMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetCommunityProfileMetricsPathParams;
}


export class ReposGetCommunityProfileMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  communityProfile?: shared.CommunityProfile;
}
