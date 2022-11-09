import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AddCommunicationToCaseRequest extends SpeakeasyBase {
    attachmentSetId?: string;
    caseId?: string;
    ccEmailAddresses?: string[];
    communicationBody: string;
}
