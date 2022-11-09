import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLicenseConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn?: string;
}
