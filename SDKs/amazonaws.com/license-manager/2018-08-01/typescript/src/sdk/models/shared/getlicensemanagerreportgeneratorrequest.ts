import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LicenseManagerReportGeneratorArn" })
  licenseManagerReportGeneratorArn: string;
}
