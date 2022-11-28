import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaiduChannelResponse } from "./baiduchannelresponse";



export class GetBaiduChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaiduChannelResponse" })
  baiduChannelResponse: BaiduChannelResponse;
}
