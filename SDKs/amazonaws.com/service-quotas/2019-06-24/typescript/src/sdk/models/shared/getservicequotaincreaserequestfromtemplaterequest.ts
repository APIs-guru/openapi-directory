import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
