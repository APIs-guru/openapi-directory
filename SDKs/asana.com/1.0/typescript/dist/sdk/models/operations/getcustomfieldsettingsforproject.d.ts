import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldSettingsForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetCustomFieldSettingsForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetCustomFieldSettingsForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomFieldSettingResponse[];
}
export declare class GetCustomFieldSettingsForProjectRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldSettingsForProjectPathParams;
    queryParams: GetCustomFieldSettingsForProjectQueryParams;
}
export declare class GetCustomFieldSettingsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getCustomFieldSettingsForProject200ApplicationJsonObject?: GetCustomFieldSettingsForProject200ApplicationJson;
}
