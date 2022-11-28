import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlacklistEntry
/** 
 * An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
**/
export class BlacklistEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ListingTime" })
  listingTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RblName" })
  rblName?: string;
}
