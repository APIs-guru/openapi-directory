import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LicenseSpecification
/** 
 * Details for associating a license configuration with a resource.
**/
export class LicenseSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=AmiAssociationScope" })
  amiAssociationScope?: string;

  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
