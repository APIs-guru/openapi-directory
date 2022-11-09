import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkWithType
/** 
 * Hypermedia Link with Type
**/
export class LinkWithType extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
