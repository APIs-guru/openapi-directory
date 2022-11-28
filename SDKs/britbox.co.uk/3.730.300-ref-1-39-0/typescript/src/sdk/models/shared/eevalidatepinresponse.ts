import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeValidatePinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pinValid" })
  pinValid?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
