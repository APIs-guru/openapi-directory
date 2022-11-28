import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformationFilterKeyEnum } from "./instanceinformationfilterkeyenum";
/**
 * <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p>
**/
export declare class InstanceInformationFilter extends SpeakeasyBase {
    key: InstanceInformationFilterKeyEnum;
    valueSet: string[];
}
