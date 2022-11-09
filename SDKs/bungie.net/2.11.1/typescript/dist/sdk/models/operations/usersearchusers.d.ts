import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UserSearchUsersQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class UserSearchUsersRequest extends SpeakeasyBase {
    queryParams: UserSearchUsersQueryParams;
}
export declare class UserSearchUsersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
