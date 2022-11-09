import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpSet } from "./ipset";


export class GetIpSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IPSet" })
  ipSet?: IpSet;
}
