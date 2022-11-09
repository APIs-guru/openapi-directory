import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitignoreTemplate
/** 
 * Gitignore Template
**/
export class GitignoreTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=source" })
  source: string;
}
