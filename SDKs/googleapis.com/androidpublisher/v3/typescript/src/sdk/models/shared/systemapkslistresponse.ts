import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Variant } from "./variant";



// SystemApksListResponse
/** 
 * Response to list previously created system APK variants.
**/
export class SystemApksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variants", elemType: Variant })
  variants?: Variant[];
}
