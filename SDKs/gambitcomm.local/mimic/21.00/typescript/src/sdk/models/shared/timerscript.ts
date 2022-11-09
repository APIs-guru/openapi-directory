import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimerScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=arg" })
  arg?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
