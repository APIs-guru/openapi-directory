import { SpeakeasyBase } from "../../../internal/utils";
import { Logo } from "./logo";
import { Translation } from "./translation";
export declare class Category extends SpeakeasyBase {
    count?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    listingDescriptionTextTemplate?: string;
    listingFeaturesTextTemplate?: string;
    listingPricingTextTemplate?: string;
    logo?: Logo;
    name: string;
    slug: string;
    translations?: Translation[];
    updatedAt?: Date;
}
