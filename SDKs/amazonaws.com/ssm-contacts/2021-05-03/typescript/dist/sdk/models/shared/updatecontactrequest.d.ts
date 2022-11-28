import { SpeakeasyBase } from "../../../internal/utils";
import { Plan } from "./plan";
export declare class UpdateContactRequest extends SpeakeasyBase {
    contactId: string;
    displayName?: string;
    plan?: Plan;
}
