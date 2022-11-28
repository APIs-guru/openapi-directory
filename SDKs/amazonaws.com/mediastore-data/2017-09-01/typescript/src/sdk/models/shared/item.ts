import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemTypeEnum } from "./itemtypeenum";



// Item
/** 
 * A metadata entry for a folder or object.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentLength" })
  contentLength?: number;

  @SpeakeasyMetadata({ data: "json, name=ContentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ItemTypeEnum;
}
