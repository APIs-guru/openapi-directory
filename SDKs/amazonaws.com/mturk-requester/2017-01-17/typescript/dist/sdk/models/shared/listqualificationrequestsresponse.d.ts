import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationRequest } from "./qualificationrequest";
export declare class ListQualificationRequestsResponse extends SpeakeasyBase {
    nextToken?: string;
    numResults?: number;
    qualificationRequests?: QualificationRequest[];
}
