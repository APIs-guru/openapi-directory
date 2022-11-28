import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=SourceVersion" })
  sourceVersion: string;
}
