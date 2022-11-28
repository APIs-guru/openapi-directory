import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRequestedServiceQuotaChangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId: string;
}
