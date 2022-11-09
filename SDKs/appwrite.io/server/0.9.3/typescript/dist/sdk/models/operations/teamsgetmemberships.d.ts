import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TeamsGetMembershipsPathParams extends SpeakeasyBase {
    teamId: string;
}
export declare class TeamsGetMembershipsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderType?: string;
    search?: string;
}
export declare class TeamsGetMembershipsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class TeamsGetMembershipsRequest extends SpeakeasyBase {
    pathParams: TeamsGetMembershipsPathParams;
    queryParams: TeamsGetMembershipsQueryParams;
    security: TeamsGetMembershipsSecurity;
}
export declare class TeamsGetMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    membershipList?: shared.MembershipList;
}
