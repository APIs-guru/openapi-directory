import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";



export class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=InputId" })
  inputId: string;

  @SpeakeasyMetadata({ data: "json, name=InputProcessingConfiguration" })
  inputProcessingConfiguration: InputProcessingConfiguration;
}
