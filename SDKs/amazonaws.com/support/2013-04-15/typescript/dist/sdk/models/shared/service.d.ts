import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";
/**
 * Information about an AWS service returned by the <a>DescribeServices</a> operation.
**/
export declare class Service extends SpeakeasyBase {
    categories?: Category[];
    code?: string;
    name?: string;
}
