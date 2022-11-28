import { SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { QualificationStatusEnum } from "./qualificationstatusenum";
/**
 * The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).
**/
export declare class Qualification extends SpeakeasyBase {
    grantTime?: Date;
    integerValue?: number;
    localeValue?: Locale;
    qualificationTypeId?: string;
    status?: QualificationStatusEnum;
    workerId?: string;
}
