import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CodeContent } from "./codecontent";
import { CodeContentTypeEnum } from "./codecontenttypeenum";
/**
 * Describes code configuration for an application.
**/
export declare class ApplicationCodeConfiguration extends SpeakeasyBase {
    codeContent?: CodeContent;
    codeContentType: CodeContentTypeEnum;
}
