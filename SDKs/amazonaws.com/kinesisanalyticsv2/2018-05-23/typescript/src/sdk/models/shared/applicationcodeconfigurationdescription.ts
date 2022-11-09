import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeContentDescription } from "./codecontentdescription";
import { CodeContentTypeEnum } from "./codecontenttypeenum";


// ApplicationCodeConfigurationDescription
/** 
 * Describes code configuration for an application.
**/
export class ApplicationCodeConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CodeContentDescription" })
  codeContentDescription?: CodeContentDescription;

  @Metadata({ data: "json, name=CodeContentType" })
  codeContentType: CodeContentTypeEnum;
}
