import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLicenseConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
