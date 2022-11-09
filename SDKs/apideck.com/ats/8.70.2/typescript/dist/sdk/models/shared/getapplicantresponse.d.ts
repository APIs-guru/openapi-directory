import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Applicant } from "./applicant";
export declare class GetApplicantResponse extends SpeakeasyBase {
    data: Applicant;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
