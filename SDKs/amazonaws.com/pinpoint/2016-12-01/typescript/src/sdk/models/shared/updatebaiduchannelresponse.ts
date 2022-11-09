import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaiduChannelResponse } from "./baiduchannelresponse";


export class UpdateBaiduChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaiduChannelResponse" })
  baiduChannelResponse: BaiduChannelResponse;
}
