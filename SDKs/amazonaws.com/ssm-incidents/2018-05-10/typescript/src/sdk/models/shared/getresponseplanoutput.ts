import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Action } from "./action";
import { ChatChannel } from "./chatchannel";
import { IncidentTemplate } from "./incidenttemplate";


export class GetResponsePlanOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Action })
  actions?: Action[];

  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=chatChannel" })
  chatChannel?: ChatChannel;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=engagements" })
  engagements?: string[];

  @Metadata({ data: "json, name=incidentTemplate" })
  incidentTemplate: IncidentTemplate;

  @Metadata({ data: "json, name=name" })
  name: string;
}
