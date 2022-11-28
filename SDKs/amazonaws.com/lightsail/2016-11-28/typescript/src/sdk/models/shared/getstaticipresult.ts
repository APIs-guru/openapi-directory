import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StaticIp } from "./staticip";



export class GetStaticIpResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=staticIp" })
  staticIp?: StaticIp;
}
