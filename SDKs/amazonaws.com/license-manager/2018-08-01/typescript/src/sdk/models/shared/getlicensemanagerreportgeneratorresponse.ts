import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportGenerator } from "./reportgenerator";


export class GetLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportGenerator" })
  reportGenerator?: ReportGenerator;
}
