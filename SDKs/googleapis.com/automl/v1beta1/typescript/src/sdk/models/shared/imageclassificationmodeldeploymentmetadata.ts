import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageClassificationModelDeploymentMetadata
/** 
 * Model deployment metadata specific to Image Classification.
**/
export class ImageClassificationModelDeploymentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: string;
}
