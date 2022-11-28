import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationTypeStatusEnum } from "./qualificationtypestatusenum";
/**
 *  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.
**/
export declare class QualificationType extends SpeakeasyBase {
    answerKey?: string;
    autoGranted?: boolean;
    autoGrantedValue?: number;
    creationTime?: Date;
    description?: string;
    isRequestable?: boolean;
    keywords?: string;
    name?: string;
    qualificationTypeId?: string;
    qualificationTypeStatus?: QualificationTypeStatusEnum;
    retryDelayInSeconds?: number;
    test?: string;
    testDurationInSeconds?: number;
}
