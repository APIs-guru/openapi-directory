import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceInformationFilterKeyEnum } from "./instanceinformationfilterkeyenum";



// InstanceInformationFilter
/** 
 * <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this operation instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and doesn't support tags. </p>
**/
export class InstanceInformationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: InstanceInformationFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=valueSet" })
  valueSet: string[];
}
