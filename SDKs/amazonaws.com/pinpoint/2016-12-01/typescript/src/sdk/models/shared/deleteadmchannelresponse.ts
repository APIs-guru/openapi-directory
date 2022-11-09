import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdmChannelResponse } from "./admchannelresponse";


export class DeleteAdmChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADMChannelResponse" })
  admChannelResponse: AdmChannelResponse;
}
