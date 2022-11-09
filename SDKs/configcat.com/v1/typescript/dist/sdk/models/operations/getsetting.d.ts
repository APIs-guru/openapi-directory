import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSettingPathParams extends SpeakeasyBase {
    settingId: number;
}
export declare class GetSettingRequest extends SpeakeasyBase {
    pathParams: GetSettingPathParams;
}
export declare class GetSettingResponse extends SpeakeasyBase {
    contentType: string;
    settingModel?: shared.SettingModel;
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
}
