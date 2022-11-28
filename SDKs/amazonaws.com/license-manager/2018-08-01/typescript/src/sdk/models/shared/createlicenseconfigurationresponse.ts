import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLicenseConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn?: string;
}
