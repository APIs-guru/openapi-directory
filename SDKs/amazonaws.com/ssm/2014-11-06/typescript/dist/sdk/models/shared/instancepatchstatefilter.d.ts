import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePatchStateOperatorTypeEnum } from "./instancepatchstateoperatortypeenum";
/**
 * <p>Defines a filter used in <a>DescribeInstancePatchStatesForPatchGroup</a> to scope down the information returned by the API.</p> <p> <b>Example</b>: To filter for all instances in a patch group having more than three patches with a <code>FailedCount</code> status, use the following for the filter:</p> <ul> <li> <p>Value for <code>Key</code>: <code>FailedCount</code> </p> </li> <li> <p>Value for <code>Type</code>: <code>GreaterThan</code> </p> </li> <li> <p>Value for <code>Values</code>: <code>3</code> </p> </li> </ul>
**/
export declare class InstancePatchStateFilter extends SpeakeasyBase {
    key: string;
    type: InstancePatchStateOperatorTypeEnum;
    values: string[];
}
