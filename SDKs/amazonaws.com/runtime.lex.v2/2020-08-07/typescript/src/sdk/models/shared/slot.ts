import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// Slot
/** 
 * A value that Amazon Lex V2 uses to fulfill an intent. 
**/
export class Slot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Value;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: Slot })
  values?: Slot[];
}
