import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListMembersLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare enum TeamsListMembersLegacyRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    role?: TeamsListMembersLegacyRoleEnum;
}
export declare class TeamsListMembersLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListMembersLegacyPathParams;
    queryParams: TeamsListMembersLegacyQueryParams;
}
export declare class TeamsListMembersLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
