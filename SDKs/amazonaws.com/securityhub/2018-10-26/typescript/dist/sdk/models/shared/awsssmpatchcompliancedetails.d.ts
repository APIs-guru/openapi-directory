import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSsmPatch } from "./awsssmpatch";
/**
 * Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.
**/
export declare class AwsSsmPatchComplianceDetails extends SpeakeasyBase {
    patch?: AwsSsmPatch;
}
