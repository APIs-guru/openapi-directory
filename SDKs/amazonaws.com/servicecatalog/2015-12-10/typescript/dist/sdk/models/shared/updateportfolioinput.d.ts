import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class UpdatePortfolioInput extends SpeakeasyBase {
    acceptLanguage?: string;
    addTags?: Tag[];
    description?: string;
    displayName?: string;
    id: string;
    providerName?: string;
    removeTags?: string[];
}
