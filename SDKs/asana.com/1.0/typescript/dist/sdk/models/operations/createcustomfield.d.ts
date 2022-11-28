import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomFieldQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateCustomFieldRequestBodyInput extends SpeakeasyBase {
    data?: shared.CustomFieldRequestInput;
}
export declare class CreateCustomField201ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldResponse;
}
export declare class CreateCustomFieldRequest extends SpeakeasyBase {
    queryParams: CreateCustomFieldQueryParams;
    request?: CreateCustomFieldRequestBodyInput;
}
export declare class CreateCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createCustomField201ApplicationJsonObject?: CreateCustomField201ApplicationJson;
}
