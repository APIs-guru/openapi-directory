import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { Tag } from "./tag";
import { ReportTypeEnum } from "./reporttypeenum";


export class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ReportContext" })
  reportContext: ReportContext;

  @Metadata({ data: "json, name=ReportFrequency" })
  reportFrequency: ReportFrequency;

  @Metadata({ data: "json, name=ReportGeneratorName" })
  reportGeneratorName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Type" })
  type: ReportTypeEnum[];
}
