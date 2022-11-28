import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Window2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days" })
  days: number[];

  @SpeakeasyMetadata({ data: "json, name=length_hours" })
  lengthHours: number;

  @SpeakeasyMetadata({ data: "json, name=start_hour" })
  startHour: number;
}
