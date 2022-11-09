import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=SourceVersion" })
  sourceVersion: string;
}
