import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppValidationConfiguration } from "./appvalidationconfiguration";
import { ServerGroupValidationConfiguration } from "./servergroupvalidationconfiguration";
export declare class GetAppValidationConfigurationResponse extends SpeakeasyBase {
    appValidationConfigurations?: AppValidationConfiguration[];
    serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
