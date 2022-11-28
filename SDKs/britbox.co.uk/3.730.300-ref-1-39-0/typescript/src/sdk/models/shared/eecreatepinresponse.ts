import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeCreatePinResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pinReference" })
  pinReference: string;

  @SpeakeasyMetadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
