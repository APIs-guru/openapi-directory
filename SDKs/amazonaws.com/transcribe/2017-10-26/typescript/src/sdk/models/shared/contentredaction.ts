import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedactionOutputEnum } from "./redactionoutputenum";
import { RedactionTypeEnum } from "./redactiontypeenum";


// ContentRedaction
/** 
 * Settings for content redaction within a transcription job.
**/
export class ContentRedaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=RedactionOutput" })
  redactionOutput: RedactionOutputEnum;

  @Metadata({ data: "json, name=RedactionType" })
  redactionType: RedactionTypeEnum;
}
