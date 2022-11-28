import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdmChannelResponse } from "./admchannelresponse";



export class GetAdmChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADMChannelResponse" })
  admChannelResponse: AdmChannelResponse;
}
