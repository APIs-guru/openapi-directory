import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ItemTypeEnum } from "./itemtypeenum";


// Item
/** 
 * A metadata entry for a folder or object.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentLength" })
  contentLength?: number;

  @Metadata({ data: "json, name=ContentType" })
  contentType?: string;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ItemTypeEnum;
}
