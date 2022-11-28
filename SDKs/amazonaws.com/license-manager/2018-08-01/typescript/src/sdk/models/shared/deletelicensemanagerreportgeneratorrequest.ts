import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseManagerReportGeneratorArn" })
  licenseManagerReportGeneratorArn: string;
}
