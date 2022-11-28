import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgePresetDeploymentStatusEnum } from "./edgepresetdeploymentstatusenum";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";



// EdgePresetDeploymentOutput
/** 
 * The output of a SageMaker Edge Manager deployable resource.
**/
export class EdgePresetDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Artifact" })
  artifact?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EdgePresetDeploymentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: EdgePresetDeploymentTypeEnum;
}
