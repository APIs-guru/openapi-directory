import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicenseUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;
}
