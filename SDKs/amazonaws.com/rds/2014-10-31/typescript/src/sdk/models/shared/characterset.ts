import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CharacterSet
/** 
 *  This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
**/
export class CharacterSet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
