import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactChannelAddress
/** 
 * The details that Incident Manager uses when trying to engage the contact channel. 
**/
export class ContactChannelAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=SimpleAddress" })
  simpleAddress?: string;
}
