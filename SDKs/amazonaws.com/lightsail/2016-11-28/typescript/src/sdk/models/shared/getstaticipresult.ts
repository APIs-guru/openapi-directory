import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StaticIp } from "./staticip";


export class GetStaticIpResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=staticIp" })
  staticIp?: StaticIp;
}
