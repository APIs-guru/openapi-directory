import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";
import { ErrorDetail } from "./errordetail";
/**
 * This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
**/
export declare class ChangeSummary extends SpeakeasyBase {
    changeName?: string;
    changeType?: string;
    details?: string;
    entity?: Entity;
    errorDetailList?: ErrorDetail[];
}
