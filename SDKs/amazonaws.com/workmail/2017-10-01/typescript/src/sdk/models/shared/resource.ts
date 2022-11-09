import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityStateEnum } from "./entitystateenum";
import { ResourceTypeEnum } from "./resourcetypeenum";


// Resource
/** 
 * The representation of a resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisabledDate" })
  disabledDate?: Date;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=EnabledDate" })
  enabledDate?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: EntityStateEnum;

  @Metadata({ data: "json, name=Type" })
  type?: ResourceTypeEnum;
}
