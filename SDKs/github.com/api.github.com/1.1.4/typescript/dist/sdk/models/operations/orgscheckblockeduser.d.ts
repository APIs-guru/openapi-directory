import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsCheckBlockedUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsCheckBlockedUserRequest extends SpeakeasyBase {
    pathParams: OrgsCheckBlockedUserPathParams;
}
export declare class OrgsCheckBlockedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
