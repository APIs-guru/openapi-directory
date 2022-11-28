import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// ResourceInventory
/** 
 * Details about a resource.
**/
export class ResourceInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Platform" })
  platform?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceOwningAccountId" })
  resourceOwningAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
