import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Service } from "./service";
/**
 * The list of AWS services returned by the <a>DescribeServices</a> operation.
**/
export declare class DescribeServicesResponse extends SpeakeasyBase {
    services?: Service[];
}
