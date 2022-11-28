import { SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";
export declare class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
    applicationArn?: string;
    applicationVersionId?: number;
    inputId?: string;
    inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
