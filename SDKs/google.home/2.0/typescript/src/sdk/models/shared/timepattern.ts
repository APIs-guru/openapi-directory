import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimePattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour: number;

  @Metadata({ data: "json, name=minute" })
  minute: number;

  @Metadata({ data: "json, name=second" })
  second: number;
}
