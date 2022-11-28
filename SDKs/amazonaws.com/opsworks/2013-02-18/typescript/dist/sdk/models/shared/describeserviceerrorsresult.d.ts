import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceError } from "./serviceerror";
/**
 * Contains the response to a <code>DescribeServiceErrors</code> request.
**/
export declare class DescribeServiceErrorsResult extends SpeakeasyBase {
    serviceErrors?: ServiceError[];
}
