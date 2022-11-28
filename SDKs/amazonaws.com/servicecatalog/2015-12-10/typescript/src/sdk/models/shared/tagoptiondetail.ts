import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagOptionDetail
/** 
 * Information about a TagOption.
**/
export class TagOptionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
