import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationStatusEnum } from "./qualificationstatusenum";
export declare class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    qualificationTypeId: string;
    status?: QualificationStatusEnum;
}
