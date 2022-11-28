import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModerationLabel
/** 
 * Provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Content moderation in the Amazon Rekognition Developer Guide.
**/
export class ModerationLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentName" })
  parentName?: string;
}
