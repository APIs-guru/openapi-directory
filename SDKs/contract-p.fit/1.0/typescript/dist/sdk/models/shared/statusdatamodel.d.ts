import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatusDataModel extends SpeakeasyBase {
    archived?: boolean;
    data?: boolean;
    escalate?: boolean;
    feedback?: boolean;
    lock?: boolean;
    readyAccepted?: boolean;
    readyAttempts?: number;
    reject?: boolean;
    rejectAccepted?: boolean;
    rejectAttempts?: number;
    sampling?: boolean;
    submitAccepted?: boolean;
    submitAttempts?: number;
    success?: boolean;
}
