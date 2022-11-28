import { SpeakeasyBase } from "../../../internal/utils";
import { FailedCreateAssociation } from "./failedcreateassociation";
import { AssociationDescription } from "./associationdescription";
export declare class CreateAssociationBatchResult extends SpeakeasyBase {
    failed?: FailedCreateAssociation[];
    successful?: AssociationDescription[];
}
