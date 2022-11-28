import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";



// EdgeOutputConfig
/** 
 * The output configuration.
**/
export class EdgeOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetDeploymentConfig" })
  presetDeploymentConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=PresetDeploymentType" })
  presetDeploymentType?: EdgePresetDeploymentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3OutputLocation" })
  s3OutputLocation: string;
}
