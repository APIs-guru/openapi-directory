import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSet } from "./ipset";



export class CreateIpSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @SpeakeasyMetadata({ data: "json, name=IPSet" })
  ipSet?: IpSet;
}
