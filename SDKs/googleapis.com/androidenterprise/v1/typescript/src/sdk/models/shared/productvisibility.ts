import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProductVisibilityTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}


// ProductVisibility
/** 
 * A product to be made visible to a user.
**/
export class ProductVisibility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=trackIds" })
  trackIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tracks" })
  tracks?: ProductVisibilityTracksEnum[];
}
