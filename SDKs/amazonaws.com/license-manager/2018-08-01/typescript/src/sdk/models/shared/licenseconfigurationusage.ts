import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";


// LicenseConfigurationUsage
/** 
 * Details about the usage of a resource associated with a license configuration.
**/
export class LicenseConfigurationUsage extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationTime" })
  associationTime?: Date;

  @Metadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @Metadata({ data: "json, name=ResourceStatus" })
  resourceStatus?: string;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
