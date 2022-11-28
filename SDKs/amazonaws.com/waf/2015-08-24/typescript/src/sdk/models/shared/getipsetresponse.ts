import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSet } from "./ipset";



export class GetIpSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IPSet" })
  ipSet?: IpSet;
}
