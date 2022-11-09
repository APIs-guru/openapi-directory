import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpSet } from "./ipset";


export class CreateIpSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChangeToken" })
  changeToken?: string;

  @Metadata({ data: "json, name=IPSet" })
  ipSet?: IpSet;
}
