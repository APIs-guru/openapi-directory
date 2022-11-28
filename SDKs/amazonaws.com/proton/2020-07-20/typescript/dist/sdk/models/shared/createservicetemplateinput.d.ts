import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
import { Tag } from "./tag";
export declare class CreateServiceTemplateInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    encryptionKey?: string;
    name: string;
    pipelineProvisioning?: ProvisioningEnum;
    tags?: Tag[];
}
