import { SpeakeasyBase } from "../../../internal/utils";
import { IpSet } from "./ipset";
import { PortSet } from "./portset";
/**
 * Settings that are available for use in the rules in the <a>RuleGroup</a> where this is defined.
**/
export declare class RuleVariables extends SpeakeasyBase {
    ipSets?: Map<string, IpSet>;
    portSets?: Map<string, PortSet>;
}
