import { SpeakeasyBase } from "../../../internal/utils";
import { OrderableClusterOption } from "./orderableclusteroption";
/**
 * Contains the output from the <a>DescribeOrderableClusterOptions</a> action.
**/
export declare class OrderableClusterOptionsMessage extends SpeakeasyBase {
    marker?: string;
    orderableClusterOptions?: OrderableClusterOption[];
}
