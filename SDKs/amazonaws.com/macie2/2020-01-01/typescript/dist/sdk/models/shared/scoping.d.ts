import { SpeakeasyBase } from "../../../internal/utils";
import { JobScopingBlock } from "./jobscopingblock";
/**
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
**/
export declare class Scoping extends SpeakeasyBase {
    excludes?: JobScopingBlock;
    includes?: JobScopingBlock;
}
