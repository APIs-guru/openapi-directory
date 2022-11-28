import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";
/**
 * Template to map fields of ApplicationDataTransfer resource.
**/
export declare class ApplicationDataTransfer extends SpeakeasyBase {
    applicationId?: string;
    applicationTransferParams?: ApplicationTransferParam[];
    applicationTransferStatus?: string;
}
