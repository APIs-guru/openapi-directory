import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ProductModel } from "./productmodel";
import { SettingDataModel } from "./settingdatamodel";
export declare class IntegrationLinkDetail extends SpeakeasyBase {
    config?: ConfigModel;
    environment?: EnvironmentModel;
    product?: ProductModel;
    readOnly?: boolean;
    setting?: SettingDataModel;
    status?: string;
}
