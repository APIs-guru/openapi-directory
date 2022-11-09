import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlacklistEntry
/** 
 * An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
**/
export class BlacklistEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ListingTime" })
  listingTime?: Date;

  @Metadata({ data: "json, name=RblName" })
  rblName?: string;
}
