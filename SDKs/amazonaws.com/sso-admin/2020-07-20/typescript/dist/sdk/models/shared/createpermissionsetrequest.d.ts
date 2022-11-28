import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreatePermissionSetRequest extends SpeakeasyBase {
    description?: string;
    instanceArn: string;
    name: string;
    relayState?: string;
    sessionDuration?: string;
    tags?: Tag[];
}
