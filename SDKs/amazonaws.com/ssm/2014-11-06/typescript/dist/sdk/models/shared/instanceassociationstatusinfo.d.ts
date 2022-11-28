import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAssociationOutputUrl } from "./instanceassociationoutputurl";
/**
 * Status information about the instance association.
**/
export declare class InstanceAssociationStatusInfo extends SpeakeasyBase {
    associationId?: string;
    associationName?: string;
    associationVersion?: string;
    detailedStatus?: string;
    documentVersion?: string;
    errorCode?: string;
    executionDate?: Date;
    executionSummary?: string;
    instanceId?: string;
    name?: string;
    outputUrl?: InstanceAssociationOutputUrl;
    status?: string;
}
