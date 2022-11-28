import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetail } from "./errordetail";
import { LfTagPair } from "./lftagpair";
/**
 * A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
**/
export declare class LfTagError extends SpeakeasyBase {
    error?: ErrorDetail;
    lfTag?: LfTagPair;
}
