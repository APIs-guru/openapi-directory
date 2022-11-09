import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageClassificationModelDeploymentMetadata } from "./imageclassificationmodeldeploymentmetadata";
import { ImageObjectDetectionModelDeploymentMetadata } from "./imageobjectdetectionmodeldeploymentmetadata";


// DeployModelRequest
/** 
 * Request message for AutoMl.DeployModel.
**/
export class DeployModelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageClassificationModelDeploymentMetadata" })
  imageClassificationModelDeploymentMetadata?: ImageClassificationModelDeploymentMetadata;

  @Metadata({ data: "json, name=imageObjectDetectionModelDeploymentMetadata" })
  imageObjectDetectionModelDeploymentMetadata?: ImageObjectDetectionModelDeploymentMetadata;
}
