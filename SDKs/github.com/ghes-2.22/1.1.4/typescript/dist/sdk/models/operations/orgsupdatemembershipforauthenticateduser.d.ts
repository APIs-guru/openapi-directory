import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsUpdateMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum {
    Active = "active"
}
export declare class OrgsUpdateMembershipForAuthenticatedUserRequestBody extends SpeakeasyBase {
    state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum;
}
export declare class OrgsUpdateMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: OrgsUpdateMembershipForAuthenticatedUserPathParams;
    request?: OrgsUpdateMembershipForAuthenticatedUserRequestBody;
}
export declare class OrgsUpdateMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgMembership?: shared.OrgMembership;
    validationError?: shared.ValidationError;
}
