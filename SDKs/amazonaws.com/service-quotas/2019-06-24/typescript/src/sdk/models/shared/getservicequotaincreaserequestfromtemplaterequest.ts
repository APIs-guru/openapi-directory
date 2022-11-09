import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
