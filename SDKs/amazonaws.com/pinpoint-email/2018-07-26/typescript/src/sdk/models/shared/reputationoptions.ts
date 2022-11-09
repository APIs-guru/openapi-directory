import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReputationOptions
/** 
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region. 
**/
export class ReputationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastFreshStart" })
  lastFreshStart?: Date;

  @Metadata({ data: "json, name=ReputationMetricsEnabled" })
  reputationMetricsEnabled?: boolean;
}
