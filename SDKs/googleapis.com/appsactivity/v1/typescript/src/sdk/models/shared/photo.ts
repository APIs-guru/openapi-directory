import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Photo
/** 
 * Photo information for a user.
**/
export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
