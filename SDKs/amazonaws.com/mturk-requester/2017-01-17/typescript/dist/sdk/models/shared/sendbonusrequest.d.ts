import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendBonusRequest extends SpeakeasyBase {
    assignmentId: string;
    bonusAmount: string;
    reason: string;
    uniqueRequestToken?: string;
    workerId: string;
}
