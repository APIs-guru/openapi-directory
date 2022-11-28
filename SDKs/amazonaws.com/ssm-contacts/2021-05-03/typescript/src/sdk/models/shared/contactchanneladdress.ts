import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactChannelAddress
/** 
 * The details that Incident Manager uses when trying to engage the contact channel. 
**/
export class ContactChannelAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SimpleAddress" })
  simpleAddress?: string;
}
