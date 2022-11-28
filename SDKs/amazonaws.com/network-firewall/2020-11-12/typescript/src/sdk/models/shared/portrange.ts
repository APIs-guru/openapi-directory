import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortRange
/** 
 * A single port range specification. This is used for source and destination port ranges in the stateless rule <a>MatchAttributes</a>, <code>SourcePorts</code>, and <code>DestinationPorts</code> settings. 
**/
export class PortRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FromPort" })
  fromPort: number;

  @SpeakeasyMetadata({ data: "json, name=ToPort" })
  toPort: number;
}
