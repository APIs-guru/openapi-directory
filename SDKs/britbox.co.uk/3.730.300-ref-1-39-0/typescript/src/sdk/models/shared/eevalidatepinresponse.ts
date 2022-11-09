import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeValidatePinResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pinValid" })
  pinValid?: string;

  @Metadata({ data: "json, name=trackingHeader" })
  trackingHeader: string;
}
