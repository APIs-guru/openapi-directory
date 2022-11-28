import { SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";
import { ContactTypeEnum } from "./contacttypeenum";
export declare class GetContactResult extends SpeakeasyBase {
    alias: string;
    contactArn: string;
    displayName?: string;
    plan: Plan;
    type: ContactTypeEnum;
}
