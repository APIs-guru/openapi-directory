import { SpeakeasyBase } from "../../../internal/utils";
import { CloseStatusEnum } from "./closestatusenum";
/**
 * Used to filter the closed workflow executions in visibility APIs by their close status.
**/
export declare class CloseStatusFilter extends SpeakeasyBase {
    status: CloseStatusEnum;
}
