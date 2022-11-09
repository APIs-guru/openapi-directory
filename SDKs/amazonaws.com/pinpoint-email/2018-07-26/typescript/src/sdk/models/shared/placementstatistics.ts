import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlacementStatistics
/** 
 * An object that contains inbox placement data for an email provider.
**/
export class PlacementStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=DkimPercentage" })
  dkimPercentage?: number;

  @Metadata({ data: "json, name=InboxPercentage" })
  inboxPercentage?: number;

  @Metadata({ data: "json, name=MissingPercentage" })
  missingPercentage?: number;

  @Metadata({ data: "json, name=SpamPercentage" })
  spamPercentage?: number;

  @Metadata({ data: "json, name=SpfPercentage" })
  spfPercentage?: number;
}
