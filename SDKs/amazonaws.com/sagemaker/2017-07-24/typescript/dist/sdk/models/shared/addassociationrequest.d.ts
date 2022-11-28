import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
export declare class AddAssociationRequest extends SpeakeasyBase {
    associationType?: AssociationEdgeTypeEnum;
    destinationArn: string;
    sourceArn: string;
}
