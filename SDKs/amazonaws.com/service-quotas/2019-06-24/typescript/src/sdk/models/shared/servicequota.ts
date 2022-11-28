import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorReason } from "./errorreason";
import { QuotaPeriod } from "./quotaperiod";
import { MetricInfo } from "./metricinfo";



// ServiceQuota
/** 
 * Information about a quota.
**/
export class ServiceQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Adjustable" })
  adjustable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ErrorReason" })
  errorReason?: ErrorReason;

  @SpeakeasyMetadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Period" })
  period?: QuotaPeriod;

  @SpeakeasyMetadata({ data: "json, name=QuotaArn" })
  quotaArn?: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaName" })
  quotaName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=UsageMetric" })
  usageMetric?: MetricInfo;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
