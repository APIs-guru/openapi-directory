import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUsersUserIdAs2KeysQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetUsersUserIdAs2KeysRequest extends SpeakeasyBase {
    pathParams: GetUsersUserIdAs2KeysPathParams;
    queryParams: GetUsersUserIdAs2KeysQueryParams;
}
export declare class GetUsersUserIdAs2KeysResponse extends SpeakeasyBase {
    as2KeyEntities?: shared.As2KeyEntity[];
    contentType: string;
    statusCode: number;
}
