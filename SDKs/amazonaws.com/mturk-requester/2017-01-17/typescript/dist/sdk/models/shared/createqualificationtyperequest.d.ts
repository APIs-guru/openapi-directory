import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";
export declare class CreateQualificationTypeRequest extends SpeakeasyBase {
    answerKey?: string;
    autoGranted?: boolean;
    autoGrantedValue?: number;
    description: string;
    keywords?: string;
    name: string;
    qualificationTypeStatus: QualificationTypeStatusEnum;
    retryDelayInSeconds?: number;
    test?: string;
    testDurationInSeconds?: number;
}
