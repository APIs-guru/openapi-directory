import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeContent } from "./codecontent";
import { CodeContentTypeEnum } from "./codecontenttypeenum";


// ApplicationCodeConfiguration
/** 
 * Describes code configuration for an application.
**/
export class ApplicationCodeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeContent" })
  codeContent?: CodeContent;

  @Metadata({ data: "json, name=CodeContentType" })
  codeContentType: CodeContentTypeEnum;
}
