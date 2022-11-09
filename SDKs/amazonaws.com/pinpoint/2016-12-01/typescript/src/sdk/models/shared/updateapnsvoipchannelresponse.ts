import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsVoipChannelResponse } from "./apnsvoipchannelresponse";


export class UpdateApnsVoipChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipChannelResponse" })
  apnsVoipChannelResponse: ApnsVoipChannelResponse;
}
