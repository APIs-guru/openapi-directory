import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ValueHolder
/** 
 * A structure that can contain a value in multiple encoding formats.
**/
export class ValueHolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=IonBinary" })
  ionBinary?: string;

  @Metadata({ data: "json, name=IonText" })
  ionText?: string;
}
