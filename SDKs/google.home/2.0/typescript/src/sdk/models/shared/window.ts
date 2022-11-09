import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Window extends SpeakeasyBase {
  @Metadata({ data: "json, name=days" })
  days: number[];

  @Metadata({ data: "json, name=length_hours" })
  lengthHours: number;

  @Metadata({ data: "json, name=start_hour" })
  startHour: number;
}
