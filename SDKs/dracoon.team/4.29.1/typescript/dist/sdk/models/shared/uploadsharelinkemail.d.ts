import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for sending an email of an Upload Share link
**/
export declare class UploadShareLinkEmail extends SpeakeasyBase {
    body: string;
    receiverLanguage?: string;
    recipients: string[];
}
