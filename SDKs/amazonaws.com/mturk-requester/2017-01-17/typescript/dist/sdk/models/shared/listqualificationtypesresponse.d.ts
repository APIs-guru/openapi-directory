import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationType } from "./qualificationtype";
export declare class ListQualificationTypesResponse extends SpeakeasyBase {
    nextToken?: string;
    numResults?: number;
    qualificationTypes?: QualificationType[];
}
