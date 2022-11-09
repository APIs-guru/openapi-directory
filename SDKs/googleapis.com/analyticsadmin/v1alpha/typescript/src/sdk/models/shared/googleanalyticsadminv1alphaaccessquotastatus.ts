import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAnalyticsAdminV1alphaAccessQuotaStatus
/** 
 * Current state for a particular quota group.
**/
export class GoogleAnalyticsAdminV1alphaAccessQuotaStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumed" })
  consumed?: number;

  @Metadata({ data: "json, name=remaining" })
  remaining?: number;
}
