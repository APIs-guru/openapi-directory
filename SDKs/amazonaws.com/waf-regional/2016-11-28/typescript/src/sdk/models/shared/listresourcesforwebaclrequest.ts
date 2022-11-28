import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



export class ListResourcesForWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
