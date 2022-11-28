import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class AddCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
    optPretty?: boolean;
}
export declare class AddCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
    data?: shared.AddCustomFieldSettingRequest;
}
export declare class AddCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldSettingResponse;
}
export declare class AddCustomFieldSettingForProjectRequest extends SpeakeasyBase {
    pathParams: AddCustomFieldSettingForProjectPathParams;
    queryParams: AddCustomFieldSettingForProjectQueryParams;
    request: AddCustomFieldSettingForProjectRequestBody;
}
export declare class AddCustomFieldSettingForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addCustomFieldSettingForProject200ApplicationJsonObject?: AddCustomFieldSettingForProject200ApplicationJson;
}
