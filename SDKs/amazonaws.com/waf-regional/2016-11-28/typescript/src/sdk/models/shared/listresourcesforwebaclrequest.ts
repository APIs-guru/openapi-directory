import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


export class ListResourcesForWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=WebACLId" })
  webAclId: string;
}
