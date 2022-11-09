import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductVisibilityTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified"
,    Production = "production"
,    Beta = "beta"
,    Alpha = "alpha"
}


// ProductVisibility
/** 
 * A product to be made visible to a user.
**/
export class ProductVisibility extends SpeakeasyBase {
  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=trackIds" })
  trackIds?: string[];

  @Metadata({ data: "json, name=tracks" })
  tracks?: ProductVisibilityTracksEnum[];
}
