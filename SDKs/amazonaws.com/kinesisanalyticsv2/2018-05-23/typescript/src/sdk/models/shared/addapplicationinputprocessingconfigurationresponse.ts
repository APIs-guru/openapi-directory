import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";


export class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @Metadata({ data: "json, name=InputId" })
  inputId?: string;

  @Metadata({ data: "json, name=InputProcessingConfigurationDescription" })
  inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
