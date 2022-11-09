import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UiTemplateInfo
/** 
 * Container for user interface template information.
**/
export class UiTemplateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentSha256" })
  contentSha256?: string;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
