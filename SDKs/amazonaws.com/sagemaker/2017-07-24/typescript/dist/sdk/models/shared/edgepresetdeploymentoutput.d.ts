import { SpeakeasyBase } from "../../../internal/utils";
import { EdgePresetDeploymentStatusEnum } from "./edgepresetdeploymentstatusenum";
import { EdgePresetDeploymentTypeEnum } from "./edgepresetdeploymenttypeenum";
/**
 * The output of a SageMaker Edge Manager deployable resource.
**/
export declare class EdgePresetDeploymentOutput extends SpeakeasyBase {
    artifact?: string;
    status?: EdgePresetDeploymentStatusEnum;
    statusMessage?: string;
    type: EdgePresetDeploymentTypeEnum;
}
