import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageEntity } from "./imageentity";
import { ImageEntity } from "./imageentity";


// StyleEntity
/** 
 * Show Style
**/
export class StyleEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=logo" })
  logo?: ImageEntity;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: ImageEntity;
}
