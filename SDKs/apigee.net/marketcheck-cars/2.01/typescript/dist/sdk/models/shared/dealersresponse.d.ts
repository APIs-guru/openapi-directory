import { SpeakeasyBase } from "../../../internal/utils";
import { Dealer } from "./dealer";
/**
 * Dealers Response
**/
export declare class DealersResponse extends SpeakeasyBase {
    dealers?: Dealer[];
    numFound?: number;
}
