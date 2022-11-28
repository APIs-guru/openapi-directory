import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomFieldPathParams extends SpeakeasyBase {
    customFieldGid: string;
}
export declare class UpdateCustomFieldQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateCustomFieldRequestBodyInput extends SpeakeasyBase {
    data?: shared.CustomFieldRequestInput;
}
export declare class UpdateCustomField200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldResponse;
}
export declare class UpdateCustomFieldRequest extends SpeakeasyBase {
    pathParams: UpdateCustomFieldPathParams;
    queryParams: UpdateCustomFieldQueryParams;
    request?: UpdateCustomFieldRequestBodyInput;
}
export declare class UpdateCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateCustomField200ApplicationJsonObject?: UpdateCustomField200ApplicationJson;
}
