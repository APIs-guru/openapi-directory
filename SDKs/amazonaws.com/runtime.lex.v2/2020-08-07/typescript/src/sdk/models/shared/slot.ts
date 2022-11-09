import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";
import { Slot } from "./slot";


// Slot
/** 
 * A value that Amazon Lex V2 uses to fulfill an intent. 
**/
export class Slot extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: Value;

  @Metadata({ data: "json, name=values", elemType: shared.Slot })
  values?: Slot[];
}
