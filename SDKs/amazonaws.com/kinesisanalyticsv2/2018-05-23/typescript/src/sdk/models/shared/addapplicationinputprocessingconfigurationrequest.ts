import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputProcessingConfiguration } from "./inputprocessingconfiguration";


export class AddApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=InputId" })
  inputId: string;

  @Metadata({ data: "json, name=InputProcessingConfiguration" })
  inputProcessingConfiguration: InputProcessingConfiguration;
}
