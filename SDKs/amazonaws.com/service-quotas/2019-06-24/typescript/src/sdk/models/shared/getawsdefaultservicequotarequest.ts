import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAwsDefaultServiceQuotaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QuotaCode" })
  quotaCode: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
