import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAwsDefaultServiceQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
