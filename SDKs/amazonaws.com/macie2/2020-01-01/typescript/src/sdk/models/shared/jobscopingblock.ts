import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobScopeTerm } from "./jobscopeterm";


// JobScopingBlock
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
**/
export class JobScopingBlock extends SpeakeasyBase {
  @Metadata({ data: "json, name=and", elemType: shared.JobScopeTerm })
  and?: JobScopeTerm[];
}
