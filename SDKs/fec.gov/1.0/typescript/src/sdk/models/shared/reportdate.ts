import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=create_date" })
  createDate?: Date;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @Metadata({ data: "json, name=report_type" })
  reportType?: string;

  @Metadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @Metadata({ data: "json, name=report_year" })
  reportYear?: number;

  @Metadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
