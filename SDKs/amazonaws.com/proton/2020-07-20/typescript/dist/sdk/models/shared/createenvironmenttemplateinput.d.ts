import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
import { Tag } from "./tag";
export declare class CreateEnvironmentTemplateInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    encryptionKey?: string;
    name: string;
    provisioning?: ProvisioningEnum;
    tags?: Tag[];
}
