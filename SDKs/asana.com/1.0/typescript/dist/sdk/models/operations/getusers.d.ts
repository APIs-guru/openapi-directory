import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
    team?: string;
    workspace?: string;
}
export declare class GetUsers200ApplicationJson extends SpeakeasyBase {
    data?: shared.UserCompact[];
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getUsers200ApplicationJsonObject?: GetUsers200ApplicationJson;
}
