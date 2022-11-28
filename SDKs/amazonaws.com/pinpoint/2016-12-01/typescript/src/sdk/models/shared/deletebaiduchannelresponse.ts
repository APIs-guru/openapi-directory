import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaiduChannelResponse } from "./baiduchannelresponse";



export class DeleteBaiduChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaiduChannelResponse" })
  baiduChannelResponse: BaiduChannelResponse;
}
