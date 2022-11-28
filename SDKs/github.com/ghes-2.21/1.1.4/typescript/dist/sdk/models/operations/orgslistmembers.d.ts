import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListMembersPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum OrgsListMembersFilterEnum {
    TwofaDisabled = "2fa_disabled",
    All = "all"
}
export declare enum OrgsListMembersRoleEnum {
    All = "all",
    Admin = "admin",
    Member = "member"
}
export declare class OrgsListMembersQueryParams extends SpeakeasyBase {
    filter?: OrgsListMembersFilterEnum;
    page?: number;
    perPage?: number;
    role?: OrgsListMembersRoleEnum;
}
export declare class OrgsListMembersRequest extends SpeakeasyBase {
    pathParams: OrgsListMembersPathParams;
    queryParams: OrgsListMembersQueryParams;
}
export declare class OrgsListMembersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
    validationError?: shared.ValidationError;
}
