import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServiceQuotaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
