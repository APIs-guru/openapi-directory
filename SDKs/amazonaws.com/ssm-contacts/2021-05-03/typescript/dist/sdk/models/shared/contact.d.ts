import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
/**
 * A personal contact or escalation plan that Incident Manager engages during an incident.
**/
export declare class Contact extends SpeakeasyBase {
    alias: string;
    contactArn: string;
    displayName?: string;
    type: ContactTypeEnum;
}
