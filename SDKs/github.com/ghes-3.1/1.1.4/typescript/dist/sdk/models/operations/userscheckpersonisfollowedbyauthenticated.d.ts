import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersCheckPersonIsFollowedByAuthenticatedPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UsersCheckPersonIsFollowedByAuthenticatedRequest extends SpeakeasyBase {
    pathParams: UsersCheckPersonIsFollowedByAuthenticatedPathParams;
}
export declare class UsersCheckPersonIsFollowedByAuthenticatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
