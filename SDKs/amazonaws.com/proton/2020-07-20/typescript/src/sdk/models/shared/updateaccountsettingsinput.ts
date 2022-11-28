import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAccountSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineServiceRoleArn" })
  pipelineServiceRoleArn?: string;
}
