import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareError } from "./shareerror";
/**
 * Information about the portfolio share operation.
**/
export declare class ShareDetails extends SpeakeasyBase {
    shareErrors?: ShareError[];
    successfulShares?: string[];
}
