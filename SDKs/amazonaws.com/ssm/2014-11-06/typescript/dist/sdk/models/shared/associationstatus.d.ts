import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusNameEnum } from "./associationstatusnameenum";
/**
 * Describes an association status.
**/
export declare class AssociationStatus extends SpeakeasyBase {
    additionalInfo?: string;
    date: Date;
    message: string;
    name: AssociationStatusNameEnum;
}
