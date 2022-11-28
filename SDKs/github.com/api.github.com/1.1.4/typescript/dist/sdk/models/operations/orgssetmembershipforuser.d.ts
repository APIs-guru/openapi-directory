import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsSetMembershipForUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare enum OrgsSetMembershipForUserRequestBodyRoleEnum {
    Admin = "admin",
    Member = "member"
}
export declare class OrgsSetMembershipForUserRequestBody extends SpeakeasyBase {
    role?: OrgsSetMembershipForUserRequestBodyRoleEnum;
}
export declare class OrgsSetMembershipForUserRequest extends SpeakeasyBase {
    pathParams: OrgsSetMembershipForUserPathParams;
    request?: OrgsSetMembershipForUserRequestBody;
}
export declare class OrgsSetMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgMembership?: shared.OrgMembership;
    validationError?: shared.ValidationError;
}
