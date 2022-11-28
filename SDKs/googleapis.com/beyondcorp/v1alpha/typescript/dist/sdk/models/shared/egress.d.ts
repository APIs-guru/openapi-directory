import { SpeakeasyBase } from "../../../internal/utils";
import { PeeredVpc } from "./peeredvpc";
/**
 * The details of the egress info. One of the following options should be set.
**/
export declare class Egress extends SpeakeasyBase {
    peeredVpc?: PeeredVpc;
}
