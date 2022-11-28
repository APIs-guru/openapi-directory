import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLicenseConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
