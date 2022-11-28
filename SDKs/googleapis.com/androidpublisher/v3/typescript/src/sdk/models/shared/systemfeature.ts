import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SystemFeature
/** 
 * Representation of a system feature.
**/
export class SystemFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
