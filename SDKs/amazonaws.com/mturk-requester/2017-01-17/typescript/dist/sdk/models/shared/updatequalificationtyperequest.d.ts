import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";
export declare class UpdateQualificationTypeRequest extends SpeakeasyBase {
    answerKey?: string;
    autoGranted?: boolean;
    autoGrantedValue?: number;
    description?: string;
    qualificationTypeId: string;
    qualificationTypeStatus?: QualificationTypeStatusEnum;
    retryDelayInSeconds?: number;
    test?: string;
    testDurationInSeconds?: number;
}
