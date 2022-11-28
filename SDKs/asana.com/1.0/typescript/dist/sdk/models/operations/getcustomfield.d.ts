import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldPathParams extends SpeakeasyBase {
    customFieldGid: string;
}
export declare class GetCustomFieldQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetCustomField200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldResponse;
}
export declare class GetCustomFieldRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldPathParams;
    queryParams: GetCustomFieldQueryParams;
}
export declare class GetCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getCustomField200ApplicationJsonObject?: GetCustomField200ApplicationJson;
}
