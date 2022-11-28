import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=create_date" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=report_type" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=report_type_full" })
  reportTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=report_year" })
  reportYear?: number;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: Date;
}
