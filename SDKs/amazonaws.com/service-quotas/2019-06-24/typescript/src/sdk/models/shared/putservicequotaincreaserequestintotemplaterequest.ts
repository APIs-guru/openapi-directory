import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutServiceQuotaIncreaseRequestIntoTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsRegion" })
  awsRegion: string;

  @SpeakeasyMetadata({ data: "json, name=DesiredValue" })
  desiredValue: number;

  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
