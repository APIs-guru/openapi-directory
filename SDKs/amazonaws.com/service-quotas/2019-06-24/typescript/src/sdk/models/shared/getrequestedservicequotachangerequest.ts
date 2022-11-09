import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRequestedServiceQuotaChangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=RequestId" })
  requestId: string;
}
