import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionMapInputValue
/** 
 * The mapping between a Region and the key that's used to encrypt the data.
**/
export class RegionMapInputValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;
}
