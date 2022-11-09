import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAccountSettingsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineServiceRoleArn" })
  pipelineServiceRoleArn?: string;
}
