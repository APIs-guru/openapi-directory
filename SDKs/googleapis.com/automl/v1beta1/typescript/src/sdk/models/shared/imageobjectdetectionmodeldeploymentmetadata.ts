import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageObjectDetectionModelDeploymentMetadata
/** 
 * Model deployment metadata specific to Image Object Detection.
**/
export class ImageObjectDetectionModelDeploymentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: string;
}
