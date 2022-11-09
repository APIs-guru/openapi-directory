import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppValidationConfiguration } from "./appvalidationconfiguration";
import { ServerGroupValidationConfiguration } from "./servergroupvalidationconfiguration";
export declare class PutAppValidationConfigurationRequest extends SpeakeasyBase {
    appId: string;
    appValidationConfigurations?: AppValidationConfiguration[];
    serverGroupValidationConfigurations?: ServerGroupValidationConfiguration[];
}
