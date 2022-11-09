import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApnsVoipChannelResponse } from "./apnsvoipchannelresponse";


export class GetApnsVoipChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=APNSVoipChannelResponse" })
  apnsVoipChannelResponse: ApnsVoipChannelResponse;
}
