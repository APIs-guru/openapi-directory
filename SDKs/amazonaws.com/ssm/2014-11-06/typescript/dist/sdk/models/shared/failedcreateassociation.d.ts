import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssociationBatchRequestEntry } from "./createassociationbatchrequestentry";
import { FaultEnum } from "./faultenum";
/**
 * Describes a failed association.
**/
export declare class FailedCreateAssociation extends SpeakeasyBase {
    entry?: CreateAssociationBatchRequestEntry;
    fault?: FaultEnum;
    message?: string;
}
