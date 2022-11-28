import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";



// StyleEntity
/** 
 * Show Style
**/
export class StyleEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: ImageEntity;
}
