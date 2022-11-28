import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionMapInputValue
/** 
 * The mapping between a Region and the key that's used to encrypt the data.
**/
export class RegionMapInputValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sseKmsKeyId" })
  sseKmsKeyId?: string;
}
