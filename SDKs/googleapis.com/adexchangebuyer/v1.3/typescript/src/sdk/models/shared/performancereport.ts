import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PerformanceReport
/** 
 * The configuration data for an Ad Exchange performance report list.
**/
export class PerformanceReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidRate" })
  bidRate?: number;

  @SpeakeasyMetadata({ data: "json, name=bidRequestRate" })
  bidRequestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=calloutStatusRate" })
  calloutStatusRate?: any[];

  @SpeakeasyMetadata({ data: "json, name=cookieMatcherStatusRate" })
  cookieMatcherStatusRate?: any[];

  @SpeakeasyMetadata({ data: "json, name=creativeStatusRate" })
  creativeStatusRate?: any[];

  @SpeakeasyMetadata({ data: "json, name=filteredBidRate" })
  filteredBidRate?: number;

  @SpeakeasyMetadata({ data: "json, name=hostedMatchStatusRate" })
  hostedMatchStatusRate?: any[];

  @SpeakeasyMetadata({ data: "json, name=inventoryMatchRate" })
  inventoryMatchRate?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=latency50thPercentile" })
  latency50thPercentile?: number;

  @SpeakeasyMetadata({ data: "json, name=latency85thPercentile" })
  latency85thPercentile?: number;

  @SpeakeasyMetadata({ data: "json, name=latency95thPercentile" })
  latency95thPercentile?: number;

  @SpeakeasyMetadata({ data: "json, name=noQuotaInRegion" })
  noQuotaInRegion?: number;

  @SpeakeasyMetadata({ data: "json, name=outOfQuota" })
  outOfQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=pixelMatchRequests" })
  pixelMatchRequests?: number;

  @SpeakeasyMetadata({ data: "json, name=pixelMatchResponses" })
  pixelMatchResponses?: number;

  @SpeakeasyMetadata({ data: "json, name=quotaConfiguredLimit" })
  quotaConfiguredLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=quotaThrottledLimit" })
  quotaThrottledLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=successfulRequestRate" })
  successfulRequestRate?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=unsuccessfulRequestRate" })
  unsuccessfulRequestRate?: number;
}
