import { SpeakeasyBase } from "../../../internal/utils";
import { TemplateResponse } from "./templateresponse";
/**
 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
**/
export declare class TemplatesResponse extends SpeakeasyBase {
    item: TemplateResponse[];
    nextToken?: string;
}
