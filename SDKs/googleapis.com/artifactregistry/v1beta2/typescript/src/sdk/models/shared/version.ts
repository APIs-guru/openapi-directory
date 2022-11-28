import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// Version
/** 
 * The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedTags", elemType: Tag })
  relatedTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
