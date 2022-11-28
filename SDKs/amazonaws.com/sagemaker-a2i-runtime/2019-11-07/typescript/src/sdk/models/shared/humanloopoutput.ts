import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HumanLoopOutput
/** 
 * Information about where the human output will be stored.
**/
export class HumanLoopOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OutputS3Uri" })
  outputS3Uri: string;
}
