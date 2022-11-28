import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateActivationRequest extends SpeakeasyBase {
    defaultInstanceName?: string;
    description?: string;
    expirationDate?: Date;
    iamRole: string;
    registrationLimit?: number;
    tags?: Tag[];
}
