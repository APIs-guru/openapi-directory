import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ItvAssignMsisdnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eeProductId" })
  eeProductId: string;

  @SpeakeasyMetadata({ data: "json, name=msisdn" })
  msisdn: string;

  @SpeakeasyMetadata({ data: "json, name=profileToken" })
  profileToken: string;

  @SpeakeasyMetadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
