import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetMembershipForUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsGetMembershipForUserRequest extends SpeakeasyBase {
    pathParams: OrgsGetMembershipForUserPathParams;
}
export declare class OrgsGetMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgMembership?: shared.OrgMembership;
}
