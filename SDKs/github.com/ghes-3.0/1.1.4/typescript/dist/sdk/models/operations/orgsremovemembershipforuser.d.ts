import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsRemoveMembershipForUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsRemoveMembershipForUserRequest extends SpeakeasyBase {
    pathParams: OrgsRemoveMembershipForUserPathParams;
}
export declare class OrgsRemoveMembershipForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
