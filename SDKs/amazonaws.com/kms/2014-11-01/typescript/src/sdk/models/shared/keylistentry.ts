import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyListEntry
/** 
 * Contains information about each entry in the key list.
**/
export class KeyListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyArn" })
  keyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;
}
