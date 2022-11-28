import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSettingPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class CreateSettingRequests extends SpeakeasyBase {
    createSettingModel?: shared.CreateSettingModel;
    createSettingModel1?: shared.CreateSettingModel;
    createSettingModel2?: shared.CreateSettingModel;
}
export declare class CreateSettingRequest extends SpeakeasyBase {
    pathParams: CreateSettingPathParams;
    request: CreateSettingRequests;
}
export declare class CreateSettingResponse extends SpeakeasyBase {
    contentType: string;
    settingModel?: shared.SettingModel;
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
}
