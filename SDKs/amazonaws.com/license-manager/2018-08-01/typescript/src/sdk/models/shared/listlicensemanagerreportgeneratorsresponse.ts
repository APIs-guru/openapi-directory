import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportGenerator } from "./reportgenerator";


export class ListLicenseManagerReportGeneratorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ReportGenerators", elemType: shared.ReportGenerator })
  reportGenerators?: ReportGenerator[];
}
