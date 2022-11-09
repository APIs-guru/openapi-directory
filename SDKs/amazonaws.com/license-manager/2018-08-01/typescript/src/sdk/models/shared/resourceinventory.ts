import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// ResourceInventory
/** 
 * Details about a resource.
**/
export class ResourceInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=Platform" })
  platform?: string;

  @Metadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=ResourceOwningAccountId" })
  resourceOwningAccountId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
