import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleScopeTerm } from "./simplescopeterm";
import { TagScopeTerm } from "./tagscopeterm";



// JobScopeTerm
/** 
 * Specifies a property- or tag-based condition that defines criteria for including or excluding S3 objects from a classification job. A JobScopeTerm object can contain only one simpleScopeTerm object or one tagScopeTerm object.
**/
export class JobScopeTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=simpleScopeTerm" })
  simpleScopeTerm?: SimpleScopeTerm;

  @SpeakeasyMetadata({ data: "json, name=tagScopeTerm" })
  tagScopeTerm?: TagScopeTerm;
}
