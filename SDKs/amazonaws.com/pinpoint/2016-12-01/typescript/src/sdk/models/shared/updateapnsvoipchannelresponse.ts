import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApnsVoipChannelResponse } from "./apnsvoipchannelresponse";



export class UpdateApnsVoipChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APNSVoipChannelResponse" })
  apnsVoipChannelResponse: ApnsVoipChannelResponse;
}
