import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V2Restrictions } from "./v2restrictions";


// V2Key
/** 
 * The representation of a key managed by the API Keys API.
**/
export class V2Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=keyString" })
  keyString?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restrictions" })
  restrictions?: V2Restrictions;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
