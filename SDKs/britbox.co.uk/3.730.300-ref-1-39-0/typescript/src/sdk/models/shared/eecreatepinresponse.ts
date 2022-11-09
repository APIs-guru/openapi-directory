import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeCreatePinResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pinReference" })
  pinReference: string;

  @Metadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
