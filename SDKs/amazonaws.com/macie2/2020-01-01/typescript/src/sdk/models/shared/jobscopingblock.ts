import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobScopeTerm } from "./jobscopeterm";



// JobScopingBlock
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
**/
export class JobScopingBlock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=and", elemType: JobScopeTerm })
  and?: JobScopeTerm[];
}
