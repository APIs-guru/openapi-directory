import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceQuotaIncreaseRequestInTemplate
/** 
 * Information about a quota increase request.
**/
export class ServiceQuotaIncreaseRequestInTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion?: string;

  @Metadata({ data: "json, name=DesiredValue" })
  desiredValue?: number;

  @Metadata({ data: "json, name=GlobalQuota" })
  globalQuota?: boolean;

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
}
