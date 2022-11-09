import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IpSet } from "./ipset";
import { PortSet } from "./portset";


// RuleVariables
/** 
 * Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined. 
**/
export class RuleVariables extends SpeakeasyBase {
  @Metadata({ data: "json, name=IPSets", elemType: shared.IpSet })
  ipSets?: Map<string, IpSet>;

  @Metadata({ data: "json, name=PortSets", elemType: shared.PortSet })
  portSets?: Map<string, PortSet>;
}
