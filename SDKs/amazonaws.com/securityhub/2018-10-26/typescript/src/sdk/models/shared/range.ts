import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Identifies where the sensitive data begins and ends.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=StartColumn" })
  startColumn?: number;
}
