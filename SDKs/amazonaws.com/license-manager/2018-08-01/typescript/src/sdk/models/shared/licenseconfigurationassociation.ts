import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// LicenseConfigurationAssociation
/** 
 * Describes an association with a license configuration.
**/
export class LicenseConfigurationAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AmiAssociationScope" })
  amiAssociationScope?: string;

  @Metadata({ data: "json, name=AssociationTime" })
  associationTime?: Date;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
