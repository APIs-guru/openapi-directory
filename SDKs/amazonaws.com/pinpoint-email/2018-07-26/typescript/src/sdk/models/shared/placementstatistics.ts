import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlacementStatistics
/** 
 * An object that contains inbox placement data for an email provider.
**/
export class PlacementStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DkimPercentage" })
  dkimPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=InboxPercentage" })
  inboxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=MissingPercentage" })
  missingPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=SpamPercentage" })
  spamPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=SpfPercentage" })
  spfPercentage?: number;
}
