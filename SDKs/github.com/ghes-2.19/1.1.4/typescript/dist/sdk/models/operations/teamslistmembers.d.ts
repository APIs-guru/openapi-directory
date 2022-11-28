import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListMembersPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare enum TeamsListMembersRoleEnum {
    Member = "member",
    Maintainer = "maintainer",
    All = "all"
}
export declare class TeamsListMembersQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    role?: TeamsListMembersRoleEnum;
}
export declare class TeamsListMembersRequest extends SpeakeasyBase {
    pathParams: TeamsListMembersPathParams;
    queryParams: TeamsListMembersQueryParams;
}
export declare class TeamsListMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
