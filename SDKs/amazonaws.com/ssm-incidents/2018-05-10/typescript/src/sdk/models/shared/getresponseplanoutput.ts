import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { ChatChannel } from "./chatchannel";
import { IncidentTemplate } from "./incidenttemplate";



export class GetResponsePlanOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: Action })
  actions?: Action[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=chatChannel" })
  chatChannel?: ChatChannel;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=engagements" })
  engagements?: string[];

  @SpeakeasyMetadata({ data: "json, name=incidentTemplate" })
  incidentTemplate: IncidentTemplate;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
