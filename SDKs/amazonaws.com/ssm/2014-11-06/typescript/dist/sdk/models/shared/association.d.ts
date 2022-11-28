import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationOverview } from "./associationoverview";
import { Target } from "./target";
/**
 * Describes an association of a Amazon Web Services Systems Manager document (SSM document) and an instance.
**/
export declare class Association extends SpeakeasyBase {
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    documentVersion?: string;
    instanceId?: string;
    lastExecutionDate?: Date;
    name?: string;
    overview?: AssociationOverview;
    scheduleExpression?: string;
    targets?: Target[];
}
