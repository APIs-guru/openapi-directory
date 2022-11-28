import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InsertEnumOptionForCustomFieldPathParams extends SpeakeasyBase {
    customFieldGid: string;
}
export declare class InsertEnumOptionForCustomFieldQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class InsertEnumOptionForCustomFieldRequestBody extends SpeakeasyBase {
    data?: shared.EnumOptionInsertRequest;
}
export declare class InsertEnumOptionForCustomField200ApplicationJson extends SpeakeasyBase {
    data?: shared.EnumOption;
}
export declare class InsertEnumOptionForCustomFieldRequest extends SpeakeasyBase {
    pathParams: InsertEnumOptionForCustomFieldPathParams;
    queryParams: InsertEnumOptionForCustomFieldQueryParams;
    request?: InsertEnumOptionForCustomFieldRequestBody;
}
export declare class InsertEnumOptionForCustomFieldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    insertEnumOptionForCustomField200ApplicationJsonObject?: InsertEnumOptionForCustomField200ApplicationJson;
}
