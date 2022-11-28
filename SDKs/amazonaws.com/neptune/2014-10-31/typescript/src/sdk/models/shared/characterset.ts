import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CharacterSet
/** 
 * Specifies a character set.
**/
export class CharacterSet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
