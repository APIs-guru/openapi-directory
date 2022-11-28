import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobScopingBlock } from "./jobscopingblock";



// Scoping
/** 
 * Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
**/
export class Scoping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludes" })
  excludes?: JobScopingBlock;

  @SpeakeasyMetadata({ data: "json, name=includes" })
  includes?: JobScopingBlock;
}
