import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDeletedSettingsPathParams extends SpeakeasyBase {
    configId: string;
}
export declare class GetDeletedSettingsRequest extends SpeakeasyBase {
    pathParams: GetDeletedSettingsPathParams;
}
export declare class GetDeletedSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settingModelHaljsons?: shared.SettingModelHaljson[];
    settingModels?: shared.SettingModel[];
    statusCode: number;
}
