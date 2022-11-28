import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum OrgsListMembershipsForAuthenticatedUserStateEnum {
    Active = "active",
    Pending = "pending"
}
export declare class OrgsListMembershipsForAuthenticatedUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    state?: OrgsListMembershipsForAuthenticatedUserStateEnum;
}
export declare class OrgsListMembershipsForAuthenticatedUserRequest extends SpeakeasyBase {
    queryParams: OrgsListMembershipsForAuthenticatedUserQueryParams;
}
export declare class OrgsListMembershipsForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    orgMemberships?: shared.OrgMembership[];
    validationError?: shared.ValidationError;
}
