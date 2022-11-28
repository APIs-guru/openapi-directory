import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreatePortfolioInput extends SpeakeasyBase {
    acceptLanguage?: string;
    description?: string;
    displayName: string;
    idempotencyToken: string;
    providerName: string;
    tags?: Tag[];
}
