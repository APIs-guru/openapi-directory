import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataPrivacy
/** 
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
export class DataPrivacy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childDirected" })
  childDirected: boolean;
}
