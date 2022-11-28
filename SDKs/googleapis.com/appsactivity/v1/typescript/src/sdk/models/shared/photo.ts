import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Photo
/** 
 * Photo information for a user.
**/
export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
