import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReputationOptions
/** 
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
export class ReputationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastFreshStart" })
  lastFreshStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}
