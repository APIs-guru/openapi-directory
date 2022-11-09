import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2GetRecommendedGroupsPathParams extends SpeakeasyBase {
    createDateRange: number;
    groupType: number;
}
export declare class GroupV2GetRecommendedGroupsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2GetRecommendedGroupsRequest extends SpeakeasyBase {
    pathParams: GroupV2GetRecommendedGroupsPathParams;
    security: GroupV2GetRecommendedGroupsSecurity;
}
export declare class GroupV2GetRecommendedGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
