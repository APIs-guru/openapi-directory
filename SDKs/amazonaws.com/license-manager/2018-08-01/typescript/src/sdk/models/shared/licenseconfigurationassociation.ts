import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// LicenseConfigurationAssociation
/** 
 * Describes an association with a license configuration.
**/
export class LicenseConfigurationAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmiAssociationScope" })
  amiAssociationScope?: string;

  @SpeakeasyMetadata({ data: "json, name=AssociationTime" })
  associationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
