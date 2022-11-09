import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BaiduChannelResponse } from "./baiduchannelresponse";


export class DeleteBaiduChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaiduChannelResponse" })
  baiduChannelResponse: BaiduChannelResponse;
}
