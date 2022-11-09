import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
