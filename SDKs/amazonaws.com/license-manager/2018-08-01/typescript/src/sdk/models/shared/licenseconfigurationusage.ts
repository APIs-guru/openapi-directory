import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";



// LicenseConfigurationUsage
/** 
 * Details about the usage of a resource associated with a license configuration.
**/
export class LicenseConfigurationUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationTime" })
  associationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ConsumedLicenses" })
  consumedLicenses?: number;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceOwnerId" })
  resourceOwnerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceStatus" })
  resourceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: ResourceTypeEnum;
}
