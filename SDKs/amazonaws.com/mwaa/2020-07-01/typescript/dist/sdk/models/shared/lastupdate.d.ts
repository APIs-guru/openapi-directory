import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateError } from "./updateerror";
import { UpdateStatusEnum } from "./updatestatusenum";
/**
 * The status of the last update on the environment, and any errors that were encountered.
**/
export declare class LastUpdate extends SpeakeasyBase {
    createdAt?: Date;
    error?: UpdateError;
    status?: UpdateStatusEnum;
}
