import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserGetMembershipDataForCurrentUserSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class UserGetMembershipDataForCurrentUserRequest extends SpeakeasyBase {
    security: UserGetMembershipDataForCurrentUserSecurity;
}
export declare class UserGetMembershipDataForCurrentUserResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
