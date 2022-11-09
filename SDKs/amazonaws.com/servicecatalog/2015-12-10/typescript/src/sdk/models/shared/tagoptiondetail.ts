import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagOptionDetail
/** 
 * Information about a TagOption.
**/
export class TagOptionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
