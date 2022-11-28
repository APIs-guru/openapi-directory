import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitignoreTemplate
/** 
 * Gitignore Template
**/
export class GitignoreTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;
}
