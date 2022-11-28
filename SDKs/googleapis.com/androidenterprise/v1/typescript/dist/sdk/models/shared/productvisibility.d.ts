import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductVisibilityTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * A product to be made visible to a user.
**/
export declare class ProductVisibility extends SpeakeasyBase {
    productId?: string;
    trackIds?: string[];
    tracks?: ProductVisibilityTracksEnum[];
}
