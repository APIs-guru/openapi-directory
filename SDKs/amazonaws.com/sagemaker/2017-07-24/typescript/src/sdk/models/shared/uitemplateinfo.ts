import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UiTemplateInfo
/** 
 * Container for user interface template information.
**/
export class UiTemplateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentSha256" })
  contentSha256?: string;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
