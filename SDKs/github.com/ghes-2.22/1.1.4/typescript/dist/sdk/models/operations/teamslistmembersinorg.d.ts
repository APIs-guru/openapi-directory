import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListMembersInOrgPathParams extends SpeakeasyBase {
    org: string;
    teamSlug: string;
}
export declare enum TeamsListMembersInOrgRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    role?: TeamsListMembersInOrgRoleEnum;
}
export declare class TeamsListMembersInOrgRequest extends SpeakeasyBase {
    pathParams: TeamsListMembersInOrgPathParams;
    queryParams: TeamsListMembersInOrgQueryParams;
}
export declare class TeamsListMembersInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
