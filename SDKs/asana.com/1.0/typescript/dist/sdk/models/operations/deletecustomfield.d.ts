import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCustomFieldPathParams extends SpeakeasyBase {
    customFieldGid: string;
}
export declare class DeleteCustomFieldQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class DeleteCustomField200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class DeleteCustomFieldRequest extends SpeakeasyBase {
    pathParams: DeleteCustomFieldPathParams;
    queryParams: DeleteCustomFieldQueryParams;
}
export declare class DeleteCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    deleteCustomField200ApplicationJsonObject?: DeleteCustomField200ApplicationJson;
}
