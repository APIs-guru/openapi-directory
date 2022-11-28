import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersListQueryParams extends SpeakeasyBase {
    perPage?: number;
    since?: number;
}
export declare class UsersListRequest extends SpeakeasyBase {
    queryParams: UsersListQueryParams;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    simpleUsers?: shared.SimpleUser[];
}
