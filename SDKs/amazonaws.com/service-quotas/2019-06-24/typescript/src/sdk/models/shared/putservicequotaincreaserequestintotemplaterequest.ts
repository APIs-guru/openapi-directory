import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutServiceQuotaIncreaseRequestIntoTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsRegion" })
  awsRegion: string;

  @Metadata({ data: "json, name=DesiredValue" })
  desiredValue: number;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
