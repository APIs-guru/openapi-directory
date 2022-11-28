import { SpeakeasyBase } from "../../../internal/utils";
import { Qualification } from "./qualification";
export declare class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
    nextToken?: string;
    numResults?: number;
    qualifications?: Qualification[];
}
