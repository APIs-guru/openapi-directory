import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSettingsByTagPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare class GetSettingsByTagRequest extends SpeakeasyBase {
    pathParams: GetSettingsByTagPathParams;
}
export declare class GetSettingsByTagResponse extends SpeakeasyBase {
    contentType: string;
    settingModelHaljsons?: shared.SettingModelHaljson[];
    settingModels?: shared.SettingModel[];
    statusCode: number;
}
