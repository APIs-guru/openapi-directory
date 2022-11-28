import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveCustomFieldSettingForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class RemoveCustomFieldSettingForProjectQueryParams extends SpeakeasyBase {
    optPretty?: boolean;
}
export declare class RemoveCustomFieldSettingForProjectRequestBody extends SpeakeasyBase {
    data?: shared.RemoveCustomFieldSettingRequest;
}
export declare class RemoveCustomFieldSettingForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class RemoveCustomFieldSettingForProjectRequest extends SpeakeasyBase {
    pathParams: RemoveCustomFieldSettingForProjectPathParams;
    queryParams: RemoveCustomFieldSettingForProjectQueryParams;
    request: RemoveCustomFieldSettingForProjectRequestBody;
}
export declare class RemoveCustomFieldSettingForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeCustomFieldSettingForProject200ApplicationJsonObject?: RemoveCustomFieldSettingForProject200ApplicationJson;
}
