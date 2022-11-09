import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeEngagementResult extends SpeakeasyBase {
    contactArn: string;
    content: string;
    engagementArn: string;
    incidentId?: string;
    publicContent?: string;
    publicSubject?: string;
    sender: string;
    startTime?: Date;
    stopTime?: Date;
    subject: string;
}
