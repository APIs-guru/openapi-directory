import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ValueHolder
/** 
 * A structure that can contain a value in multiple encoding formats.
**/
export class ValueHolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IonBinary" })
  ionBinary?: string;

  @SpeakeasyMetadata({ data: "json, name=IonText" })
  ionText?: string;
}
