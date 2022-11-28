import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesItemsDestinyItemRenderComponent
/** 
 * Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
**/
export class DestinyEntitiesItemsDestinyItemRenderComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artRegions?: Map<string, number>;

  @SpeakeasyMetadata()
  useCustomDyes?: boolean;
}
