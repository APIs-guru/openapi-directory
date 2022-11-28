import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Term extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;
}
