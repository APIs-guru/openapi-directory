import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetCommunityProfileMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCommunityProfileMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetCommunityProfileMetricsPathParams;
}


export class ReposGetCommunityProfileMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  communityProfile?: shared.CommunityProfile;
}
