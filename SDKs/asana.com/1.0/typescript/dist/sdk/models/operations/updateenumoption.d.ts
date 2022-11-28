import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEnumOptionPathParams extends SpeakeasyBase {
    enumOptionGid: string;
}
export declare class UpdateEnumOptionQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class UpdateEnumOptionRequestBodyInput extends SpeakeasyBase {
    data?: shared.EnumOptionRequestInput;
}
export declare class UpdateEnumOption200ApplicationJson extends SpeakeasyBase {
    data?: shared.EnumOption;
}
export declare class UpdateEnumOptionRequest extends SpeakeasyBase {
    pathParams: UpdateEnumOptionPathParams;
    queryParams: UpdateEnumOptionQueryParams;
    request?: UpdateEnumOptionRequestBodyInput;
}
export declare class UpdateEnumOptionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateEnumOption200ApplicationJsonObject?: UpdateEnumOption200ApplicationJson;
}
