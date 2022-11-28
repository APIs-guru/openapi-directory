import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatefulRuleDirectionEnum } from "./statefulruledirectionenum";
import { StatefulRuleProtocolEnum } from "./statefulruleprotocolenum";



// Header
/** 
 * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
**/
export class Header extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=DestinationPort" })
  destinationPort: string;

  @SpeakeasyMetadata({ data: "json, name=Direction" })
  direction: StatefulRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol: StatefulRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=SourcePort" })
  sourcePort: string;
}
