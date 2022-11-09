import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HumanLoopOutput
/** 
 * Information about where the human output will be stored.
**/
export class HumanLoopOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;
}
