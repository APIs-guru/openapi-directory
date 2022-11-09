import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * The logo of the charitable organization.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
