import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSsmPatch } from "./awsssmpatch";



// AwsSsmPatchComplianceDetails
/** 
 * Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
**/
export class AwsSsmPatchComplianceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Patch" })
  patch?: AwsSsmPatch;
}
