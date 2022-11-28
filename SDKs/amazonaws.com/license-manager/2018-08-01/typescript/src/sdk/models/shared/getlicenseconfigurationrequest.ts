import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicenseConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
