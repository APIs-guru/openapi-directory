import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeContent } from "./codecontent";
import { CodeContentTypeEnum } from "./codecontenttypeenum";



// ApplicationCodeConfiguration
/** 
 * Describes code configuration for an application.
**/
export class ApplicationCodeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeContent" })
  codeContent?: CodeContent;

  @SpeakeasyMetadata({ data: "json, name=CodeContentType" })
  codeContentType: CodeContentTypeEnum;
}
