import { SpeakeasyBase } from "../../../internal/utils";
import { JobScopeTerm } from "./jobscopeterm";
/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
**/
export declare class JobScopingBlock extends SpeakeasyBase {
    and?: JobScopeTerm[];
}
