import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCaseRequest extends SpeakeasyBase {
    attachmentSetId?: string;
    categoryCode?: string;
    ccEmailAddresses?: string[];
    communicationBody: string;
    issueType?: string;
    language?: string;
    serviceCode?: string;
    severityCode?: string;
    subject: string;
}
