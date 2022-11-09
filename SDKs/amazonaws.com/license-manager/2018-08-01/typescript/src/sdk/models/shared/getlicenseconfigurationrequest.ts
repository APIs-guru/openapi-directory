import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLicenseConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseConfigurationArn" })
  licenseConfigurationArn: string;
}
