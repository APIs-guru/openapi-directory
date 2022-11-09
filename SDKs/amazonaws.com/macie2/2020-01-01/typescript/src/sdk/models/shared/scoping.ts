import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobScopingBlock } from "./jobscopingblock";
import { JobScopingBlock } from "./jobscopingblock";


// Scoping
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
**/
export class Scoping extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludes" })
  excludes?: JobScopingBlock;

  @Metadata({ data: "json, name=includes" })
  includes?: JobScopingBlock;
}
