import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsSetPublicMembershipForAuthenticatedUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsSetPublicMembershipForAuthenticatedUserRequest extends SpeakeasyBase {
    pathParams: OrgsSetPublicMembershipForAuthenticatedUserPathParams;
}
export declare class OrgsSetPublicMembershipForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
