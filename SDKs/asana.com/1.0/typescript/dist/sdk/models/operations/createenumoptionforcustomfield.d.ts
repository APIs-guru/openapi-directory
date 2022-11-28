import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
    customFieldGid: string;
}
export declare class CreateEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class CreateEnumOptionForCustomFieldRequestBodyInput extends SpeakeasyBase {
    data?: shared.EnumOptionRequestInput;
}
export declare class CreateEnumOptionForCustomField201ApplicationJson extends SpeakeasyBase {
    data?: shared.EnumOption;
}
export declare class CreateEnumOptionForCustomFieldRequest extends SpeakeasyBase {
    pathParams: CreateEnumOptionForCustomFieldPathParams;
    queryParams: CreateEnumOptionForCustomFieldQueryParams;
    request?: CreateEnumOptionForCustomFieldRequestBodyInput;
}
export declare class CreateEnumOptionForCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    createEnumOptionForCustomField201ApplicationJsonObject?: CreateEnumOptionForCustomField201ApplicationJson;
}
