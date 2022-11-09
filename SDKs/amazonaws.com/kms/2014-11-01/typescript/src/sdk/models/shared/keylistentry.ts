import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyListEntry
/** 
 * Contains information about each entry in the key list.
**/
export class KeyListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyArn" })
  keyArn?: string;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;
}
