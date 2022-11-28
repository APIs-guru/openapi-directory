import { SpeakeasyBase } from "../../../internal/utils";
import { Applicant } from "./applicant";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetApplicantsResponse extends SpeakeasyBase {
    data: Applicant[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
