import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { UserContext } from "./usercontext";
/**
 * Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
**/
export declare class AssociationSummary extends SpeakeasyBase {
    associationType?: AssociationEdgeTypeEnum;
    createdBy?: UserContext;
    creationTime?: Date;
    destinationArn?: string;
    destinationName?: string;
    destinationType?: string;
    sourceArn?: string;
    sourceName?: string;
    sourceType?: string;
}
