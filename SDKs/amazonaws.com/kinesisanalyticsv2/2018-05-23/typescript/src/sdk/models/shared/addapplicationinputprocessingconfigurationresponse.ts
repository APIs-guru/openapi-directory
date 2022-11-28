import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfigurationDescription } from "./inputprocessingconfigurationdescription";



export class AddApplicationInputProcessingConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationARN" })
  applicationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=InputId" })
  inputId?: string;

  @SpeakeasyMetadata({ data: "json, name=InputProcessingConfigurationDescription" })
  inputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}
