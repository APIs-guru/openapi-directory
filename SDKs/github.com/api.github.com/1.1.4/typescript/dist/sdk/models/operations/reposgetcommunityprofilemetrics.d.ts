import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCommunityProfileMetricsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetCommunityProfileMetricsRequest extends SpeakeasyBase {
    pathParams: ReposGetCommunityProfileMetricsPathParams;
}
export declare class ReposGetCommunityProfileMetricsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    communityProfile?: shared.CommunityProfile;
}
