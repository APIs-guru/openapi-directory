import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionResponse } from "./templateversionresponse";
/**
 * Provides information about all the versions of a specific message template.
**/
export declare class TemplateVersionsResponse extends SpeakeasyBase {
    item: TemplateVersionResponse[];
    message?: string;
    nextToken?: string;
    requestId?: string;
}
