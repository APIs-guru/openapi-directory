import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AlgorithmImage
/** 
 * Describes an algorithm image.
**/
export class AlgorithmImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dockerURI" })
  dockerUri: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
