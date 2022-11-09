import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Link
/** 
 * Hypermedia Link
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}
