import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
