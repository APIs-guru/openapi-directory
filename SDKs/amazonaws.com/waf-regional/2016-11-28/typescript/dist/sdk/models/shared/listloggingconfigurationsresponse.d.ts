import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingConfiguration } from "./loggingconfiguration";
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    loggingConfigurations?: LoggingConfiguration[];
    nextMarker?: string;
}
