import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelDeploymentMetadata } from "./imageclassificationmodeldeploymentmetadata";
import { ImageObjectDetectionModelDeploymentMetadata } from "./imageobjectdetectionmodeldeploymentmetadata";
/**
 * Request message for AutoMl.DeployModel.
**/
export declare class DeployModelRequest extends SpeakeasyBase {
    imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;
    imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
}
