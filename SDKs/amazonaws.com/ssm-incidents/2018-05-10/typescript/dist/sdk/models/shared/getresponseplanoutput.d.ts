import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { ChatChannel } from "./chatchannel";
import { IncidentTemplate } from "./incidenttemplate";
export declare class GetResponsePlanOutput extends SpeakeasyBase {
    actions?: Action[];
    arn: string;
    chatChannel?: ChatChannel;
    displayName?: string;
    engagements?: string[];
    incidentTemplate: IncidentTemplate;
    name: string;
}
