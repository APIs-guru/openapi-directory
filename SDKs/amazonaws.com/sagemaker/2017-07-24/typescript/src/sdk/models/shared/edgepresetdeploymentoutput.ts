import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgePresetDeploymentStatusEnum } from "./edgepresetdeploymentstatusenum";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";


// EdgePresetDeploymentOutput
/** 
 * The output of a SageMaker Edge Manager deployable resource.
**/
export class EdgePresetDeploymentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Artifact" })
  artifact?: string;

  @Metadata({ data: "json, name=Status" })
  status?: EdgePresetDeploymentStatusEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Type" })
  type: EdgePresetDeploymentTypeEnum;
}
