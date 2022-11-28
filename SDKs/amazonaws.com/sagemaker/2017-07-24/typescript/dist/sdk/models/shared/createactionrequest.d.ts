import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { ActionSource } from "./actionsource";
import { ActionStatusEnum } from "./actionstatusenum";
import { Tag } from "./tag";
export declare class CreateActionRequest extends SpeakeasyBase {
    actionName: string;
    actionType: string;
    description?: string;
    metadataProperties?: MetadataProperties;
    properties?: Map<string, string>;
    source: ActionSource;
    status?: ActionStatusEnum;
    tags?: Tag[];
}
