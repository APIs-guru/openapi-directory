import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkWithType
/** 
 * Hypermedia Link with Type
**/
export class LinkWithType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
