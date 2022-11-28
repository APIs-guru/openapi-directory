import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSet } from "./ipset";
import { PortSet } from "./portset";



// RuleVariables
/** 
 * Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
**/
export class RuleVariables extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IPSets", elemType: IpSet })
  ipSets?: Map<string, IpSet>;

  @SpeakeasyMetadata({ data: "json, name=PortSets", elemType: PortSet })
  portSets?: Map<string, PortSet>;
}
