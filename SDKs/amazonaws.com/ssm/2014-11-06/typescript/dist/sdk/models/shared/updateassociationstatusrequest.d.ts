import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatus } from "./associationstatus";
export declare class UpdateAssociationStatusRequest extends SpeakeasyBase {
    associationStatus: AssociationStatus;
    instanceId: string;
    name: string;
}
