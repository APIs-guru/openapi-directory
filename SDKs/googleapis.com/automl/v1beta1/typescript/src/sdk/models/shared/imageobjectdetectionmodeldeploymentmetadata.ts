import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageObjectDetectionModelDeploymentMetadata
/** 
 * Model deployment metadata specific to Image Object Detection.
**/
export class ImageObjectDetectionModelDeploymentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: string;
}
