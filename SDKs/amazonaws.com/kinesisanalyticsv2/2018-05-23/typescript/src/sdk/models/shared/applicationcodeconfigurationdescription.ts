import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeContentDescription } from "./codecontentdescription";
import { CodeContentTypeEnum } from "./codecontenttypeenum";



// ApplicationCodeConfigurationDescription
/** 
 * Describes code configuration for an application.
**/
export class ApplicationCodeConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CodeContentDescription" })
  codeContentDescription?: CodeContentDescription;

  @SpeakeasyMetadata({ data: "json, name=CodeContentType" })
  codeContentType: CodeContentTypeEnum;
}
