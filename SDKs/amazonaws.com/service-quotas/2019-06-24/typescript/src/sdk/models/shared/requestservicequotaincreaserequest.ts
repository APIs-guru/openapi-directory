import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequestServiceQuotaIncreaseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DesiredValue" })
  desiredValue: number;

  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
