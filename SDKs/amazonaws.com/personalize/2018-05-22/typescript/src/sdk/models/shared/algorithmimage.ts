import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AlgorithmImage
/** 
 * Describes an algorithm image.
**/
export class AlgorithmImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=dockerURI" })
  dockerUri: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
