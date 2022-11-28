import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationModelDeploymentMetadata } from "./imageclassificationmodeldeploymentmetadata";
import { ImageObjectDetectionModelDeploymentMetadata } from "./imageobjectdetectionmodeldeploymentmetadata";



// DeployModelRequest
/** 
 * Request message for AutoMl.DeployModel.
**/
export class DeployModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageClassificationModelDeploymentMetadata" })
  imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;

  @SpeakeasyMetadata({ data: "json, name=imageObjectDetectionModelDeploymentMetadata" })
  imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
}
