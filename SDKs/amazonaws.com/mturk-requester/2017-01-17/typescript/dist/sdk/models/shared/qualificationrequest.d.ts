import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The QualificationRequest data structure represents a request a Worker has made for a Qualification.
**/
export declare class QualificationRequest extends SpeakeasyBase {
    answer?: string;
    qualificationRequestId?: string;
    qualificationTypeId?: string;
    submitTime?: Date;
    test?: string;
    workerId?: string;
}
