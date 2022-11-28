import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdmChannelResponse } from "./admchannelresponse";



export class DeleteAdmChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ADMChannelResponse" })
  admChannelResponse: AdmChannelResponse;
}
