import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class UpdateProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    addTags?: Tag[];
    description?: string;
    distributor?: string;
    id: string;
    name?: string;
    owner?: string;
    removeTags?: string[];
    supportDescription?: string;
    supportEmail?: string;
    supportUrl?: string;
}
