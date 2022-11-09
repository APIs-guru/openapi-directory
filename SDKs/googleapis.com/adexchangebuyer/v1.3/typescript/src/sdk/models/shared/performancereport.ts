import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PerformanceReport
/** 
 * The configuration data for an Ad Exchange performance report list.
**/
export class PerformanceReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidRate" })
  bidRate?: number;

  @Metadata({ data: "json, name=bidRequestRate" })
  bidRequestRate?: number;

  @Metadata({ data: "json, name=calloutStatusRate" })
  calloutStatusRate?: any[];

  @Metadata({ data: "json, name=cookieMatcherStatusRate" })
  cookieMatcherStatusRate?: any[];

  @Metadata({ data: "json, name=creativeStatusRate" })
  creativeStatusRate?: any[];

  @Metadata({ data: "json, name=filteredBidRate" })
  filteredBidRate?: number;

  @Metadata({ data: "json, name=hostedMatchStatusRate" })
  hostedMatchStatusRate?: any[];

  @Metadata({ data: "json, name=inventoryMatchRate" })
  inventoryMatchRate?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=latency50thPercentile" })
  latency50thPercentile?: number;

  @Metadata({ data: "json, name=latency85thPercentile" })
  latency85thPercentile?: number;

  @Metadata({ data: "json, name=latency95thPercentile" })
  latency95thPercentile?: number;

  @Metadata({ data: "json, name=noQuotaInRegion" })
  noQuotaInRegion?: number;

  @Metadata({ data: "json, name=outOfQuota" })
  outOfQuota?: number;

  @Metadata({ data: "json, name=pixelMatchRequests" })
  pixelMatchRequests?: number;

  @Metadata({ data: "json, name=pixelMatchResponses" })
  pixelMatchResponses?: number;

  @Metadata({ data: "json, name=quotaConfiguredLimit" })
  quotaConfiguredLimit?: number;

  @Metadata({ data: "json, name=quotaThrottledLimit" })
  quotaThrottledLimit?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=successfulRequestRate" })
  successfulRequestRate?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=unsuccessfulRequestRate" })
  unsuccessfulRequestRate?: number;
}
