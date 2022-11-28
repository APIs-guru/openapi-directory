import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGroupUsersRequestBody extends SpeakeasyBase {
    admin?: boolean;
    groupId: number;
    userId: number;
}
export declare class PostGroupUsersRequest extends SpeakeasyBase {
    request: PostGroupUsersRequestBody;
}
export declare class PostGroupUsersResponse extends SpeakeasyBase {
    contentType: string;
    groupUserEntity?: shared.GroupUserEntity;
    statusCode: number;
}
