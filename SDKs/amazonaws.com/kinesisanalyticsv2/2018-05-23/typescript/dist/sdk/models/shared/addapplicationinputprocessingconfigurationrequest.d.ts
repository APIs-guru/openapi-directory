import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";
export declare class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
    applicationName: string;
    currentApplicationVersionId: number;
    inputId: string;
    inputProcessingConfiguration: InputProcessingConfiguration;
}
