import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Includes information about the specified association.
**/
export declare class AssociationExecution extends SpeakeasyBase {
    associationId?: string;
    associationVersion?: string;
    createdTime?: Date;
    detailedStatus?: string;
    executionId?: string;
    lastExecutionDate?: Date;
    resourceCountByStatus?: string;
    status?: string;
}
