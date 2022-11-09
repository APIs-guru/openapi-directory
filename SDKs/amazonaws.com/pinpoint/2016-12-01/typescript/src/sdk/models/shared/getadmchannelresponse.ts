import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdmChannelResponse } from "./admchannelresponse";


export class GetAdmChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ADMChannelResponse" })
  admChannelResponse: AdmChannelResponse;
}
