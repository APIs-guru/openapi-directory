import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Plan } from "./plan";
import { Tag } from "./tag";
import { ContactTypeEnum } from "./contacttypeenum";
export declare class CreateContactRequest extends SpeakeasyBase {
    alias: string;
    displayName?: string;
    idempotencyToken?: string;
    plan: Plan;
    tags?: Tag[];
    type: ContactTypeEnum;
}
