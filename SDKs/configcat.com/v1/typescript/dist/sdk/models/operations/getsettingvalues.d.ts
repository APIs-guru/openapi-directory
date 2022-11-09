import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSettingValuesPathParams extends SpeakeasyBase {
    configId: string;
    environmentId: string;
}
export declare class GetSettingValuesRequest extends SpeakeasyBase {
    pathParams: GetSettingValuesPathParams;
}
export declare class GetSettingValuesResponse extends SpeakeasyBase {
    configSettingValuesModel?: shared.ConfigSettingValuesModel;
    contentType: string;
    statusCode: number;
}
