import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimerScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arg" })
  arg?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
