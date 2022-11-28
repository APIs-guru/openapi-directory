import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceQuotaIncreaseRequestInTemplate
/** 
 * Information about a quota increase request.
**/
export class ServiceQuotaIncreaseRequestInTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=DesiredValue" })
  desiredValue?: number;

  @SpeakeasyMetadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

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
}
