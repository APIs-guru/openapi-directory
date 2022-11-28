import { SpeakeasyBase } from "../../../internal/utils";
import { CodeContentDescription } from "./codecontentdescription";
import { CodeContentTypeEnum } from "./codecontenttypeenum";
/**
 * Describes code configuration for an application.
**/
export declare class ApplicationCodeConfigurationDescription extends SpeakeasyBase {
    codeContentDescription?: CodeContentDescription;
    codeContentType: CodeContentTypeEnum;
}
