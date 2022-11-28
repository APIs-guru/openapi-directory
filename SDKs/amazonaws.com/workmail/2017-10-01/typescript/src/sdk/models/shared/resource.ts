import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";



// Resource
/** 
 * The representation of a resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ResourceTypeEnum;
}
