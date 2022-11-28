import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedactionOutputEnum } from "./redactionoutputenum";
import { RedactionTypeEnum } from "./redactiontypeenum";



// ContentRedaction
/** 
 * Settings for content redaction within a transcription job.
**/
export class ContentRedaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RedactionOutput" })
  redactionOutput: RedactionOutputEnum;

  @SpeakeasyMetadata({ data: "json, name=RedactionType" })
  redactionType: RedactionTypeEnum;
}
