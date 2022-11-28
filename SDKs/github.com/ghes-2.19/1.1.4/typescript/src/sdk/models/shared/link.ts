import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * Hypermedia Link
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href: string;
}
