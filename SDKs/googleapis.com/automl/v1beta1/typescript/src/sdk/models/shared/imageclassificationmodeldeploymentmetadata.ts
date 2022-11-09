import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageClassificationModelDeploymentMetadata
/** 
 * Model deployment metadata specific to Image Classification.
**/
export class ImageClassificationModelDeploymentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: string;
}
