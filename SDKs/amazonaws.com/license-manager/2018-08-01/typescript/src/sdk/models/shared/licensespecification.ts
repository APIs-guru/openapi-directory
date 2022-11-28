import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LicenseSpecification
/** 
 * Details for associating a license configuration with a resource.
**/
export class LicenseSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AmiAssociationScope" })
  amiAssociationScope?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
