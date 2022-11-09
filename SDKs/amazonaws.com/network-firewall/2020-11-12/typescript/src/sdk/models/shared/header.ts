import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatefulRuleDirectionEnum } from "./statefulruledirectionenum";
import { StatefulRuleProtocolEnum } from "./statefulruleprotocolenum";


// Header
/** 
 * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>. 
**/
export class Header extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination: string;

  @Metadata({ data: "json, name=DestinationPort" })
  destinationPort: string;

  @Metadata({ data: "json, name=Direction" })
  direction: StatefulRuleDirectionEnum;

  @Metadata({ data: "json, name=Protocol" })
  protocol: StatefulRuleProtocolEnum;

  @Metadata({ data: "json, name=Source" })
  source: string;

  @Metadata({ data: "json, name=SourcePort" })
  sourcePort: string;
}
