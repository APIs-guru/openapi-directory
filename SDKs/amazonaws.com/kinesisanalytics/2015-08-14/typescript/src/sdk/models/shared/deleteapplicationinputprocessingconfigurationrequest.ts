import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteApplicationInputProcessingConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=InputId" })
  inputId: string;
}
