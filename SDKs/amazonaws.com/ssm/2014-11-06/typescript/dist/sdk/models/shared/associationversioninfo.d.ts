import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationComplianceSeverityEnum } from "./associationcomplianceseverityenum";
import { InstanceAssociationOutputLocation } from "./instanceassociationoutputlocation";
import { AssociationSyncComplianceEnum } from "./associationsynccomplianceenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
/**
 * Information about the association version.
**/
export declare class AssociationVersionInfo extends SpeakeasyBase {
    applyOnlyAtCronInterval?: boolean;
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    calendarNames?: string[];
    complianceSeverity?: AssociationComplianceSeverityEnum;
    createdDate?: Date;
    documentVersion?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    name?: string;
    outputLocation?: InstanceAssociationOutputLocation;
    parameters?: Map<string, string[]>;
    scheduleExpression?: string;
    syncCompliance?: AssociationSyncComplianceEnum;
    targetLocations?: TargetLocation[];
    targets?: Target[];
}
