import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfiguration } from "./inputconfiguration";
/**
 * <p/>
**/
export declare class StartApplicationRequest extends SpeakeasyBase {
    applicationName: string;
    inputConfigurations: InputConfiguration[];
}
