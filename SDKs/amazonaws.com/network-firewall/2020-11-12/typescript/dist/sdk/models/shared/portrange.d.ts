import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings.
**/
export declare class PortRange extends SpeakeasyBase {
    fromPort: number;
    toPort: number;
}
