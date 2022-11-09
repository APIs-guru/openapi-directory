import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * Identifies where the sensitive data begins and ends.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=End" })
  end?: number;

  @Metadata({ data: "json, name=Start" })
  start?: number;

  @Metadata({ data: "json, name=StartColumn" })
  startColumn?: number;
}
