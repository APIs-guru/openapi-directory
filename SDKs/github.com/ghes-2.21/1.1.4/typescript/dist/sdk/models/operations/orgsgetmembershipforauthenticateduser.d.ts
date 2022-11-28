import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
    org: string;
}
export declare class OrgsGetMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: OrgsGetMembershipForAuthenticatedUserPathParams;
}
export declare class OrgsGetMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgMembership?: shared.OrgMembership;
}
