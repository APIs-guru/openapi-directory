import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";


// EdgeOutputConfig
/** 
 * The output configuration.
**/
export class EdgeOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=PresetDeploymentConfig" })
  presetDeploymentConfig?: string;

  @Metadata({ data: "json, name=PresetDeploymentType" })
  presetDeploymentType?: EdgePresetDeploymentTypeEnum;

  @Metadata({ data: "json, name=S3OutputLocation" })
  s3OutputLocation: string;
}
