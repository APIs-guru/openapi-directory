import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RunConfiguration } from "./runconfiguration";
export declare class StartApplicationRequest extends SpeakeasyBase {
    applicationName: string;
    runConfiguration?: RunConfiguration;
}
