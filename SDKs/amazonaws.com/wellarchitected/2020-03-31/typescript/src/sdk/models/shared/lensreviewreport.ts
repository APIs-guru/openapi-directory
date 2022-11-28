import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LensReviewReport
/** 
 * A report of a lens review.
**/
export class LensReviewReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Base64String" })
  base64String?: string;

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;
}
