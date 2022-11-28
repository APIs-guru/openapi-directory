import { SpeakeasyBase } from "../../../internal/utils";
import { AttackVectorDescription } from "./attackvectordescription";
/**
 * Summarizes all DDoS attacks for a specified time period.
**/
export declare class AttackSummary extends SpeakeasyBase {
    attackId?: string;
    attackVectors?: AttackVectorDescription[];
    endTime?: Date;
    resourceArn?: string;
    startTime?: Date;
}
