import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleScopeTerm } from "./simplescopeterm";
import { TagScopeTerm } from "./tagscopeterm";
/**
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
**/
export declare class JobScopeTerm extends SpeakeasyBase {
    simpleScopeTerm?: SimpleScopeTerm;
    tagScopeTerm?: TagScopeTerm;
}
