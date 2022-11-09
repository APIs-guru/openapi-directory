import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LensReviewReport
/** 
 * A report of a lens review.
**/
export class LensReviewReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=Base64String" })
  base64String?: string;

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;
}
