import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatePattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day: number;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: number;
}
