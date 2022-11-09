import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortRange
/** 
 * A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. 
**/
export class PortRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=FromPort" })
  fromPort: number;

  @Metadata({ data: "json, name=ToPort" })
  toPort: number;
}
