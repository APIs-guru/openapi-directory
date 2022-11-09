import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Term extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;
}
