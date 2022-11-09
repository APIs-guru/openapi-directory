import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SystemFeature
/** 
 * Representation of a system feature.
**/
export class SystemFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
