import { SpeakeasyBase } from "../../../internal/utils";
import { OutputSource } from "./outputsource";
/**
 * Includes information about the specified association execution.
**/
export declare class AssociationExecutionTarget extends SpeakeasyBase {
    associationId?: string;
    associationVersion?: string;
    detailedStatus?: string;
    executionId?: string;
    lastExecutionDate?: Date;
    outputSource?: OutputSource;
    resourceId?: string;
    resourceType?: string;
    status?: string;
}
