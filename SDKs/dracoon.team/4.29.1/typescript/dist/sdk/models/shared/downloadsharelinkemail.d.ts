import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for sending an email of a Download Share link
**/
export declare class DownloadShareLinkEmail extends SpeakeasyBase {
    body: string;
    receiverLanguage?: string;
    recipients: string[];
}
