import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaiduChannelResponse } from "./baiduchannelresponse";



export class UpdateBaiduChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaiduChannelResponse" })
  baiduChannelResponse: BaiduChannelResponse;
}
