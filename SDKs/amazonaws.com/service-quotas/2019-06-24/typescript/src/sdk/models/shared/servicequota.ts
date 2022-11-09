import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorReason } from "./errorreason";
import { QuotaPeriod } from "./quotaperiod";
import { MetricInfo } from "./metricinfo";


// ServiceQuota
/** 
 * Information about a quota.
**/
export class ServiceQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=Adjustable" })
  adjustable?: boolean;

  @Metadata({ data: "json, name=ErrorReason" })
  errorReason?: ErrorReason;

  @Metadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

  @Metadata({ data: "json, name=Period" })
  period?: QuotaPeriod;

  @Metadata({ data: "json, name=QuotaArn" })
  quotaArn?: string;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode?: string;

  @Metadata({ data: "json, name=QuotaName" })
  quotaName?: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;

  @Metadata({ data: "json, name=UsageMetric" })
  usageMetric?: MetricInfo;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
