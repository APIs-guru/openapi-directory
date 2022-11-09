import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variant } from "./variant";


// SystemApksListResponse
/** 
 * Response to list previously created system APK variants.
**/
export class SystemApksListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=variants", elemType: shared.Variant })
  variants?: Variant[];
}
