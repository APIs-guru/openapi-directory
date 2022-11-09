import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLicenseUsageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;
}
