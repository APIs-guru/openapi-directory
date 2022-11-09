import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ItvAssignMsisdnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=eeProductId" })
  eeProductId: string;

  @Metadata({ data: "json, name=msisdn" })
  msisdn: string;

  @Metadata({ data: "json, name=profileToken" })
  profileToken: string;

  @Metadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
