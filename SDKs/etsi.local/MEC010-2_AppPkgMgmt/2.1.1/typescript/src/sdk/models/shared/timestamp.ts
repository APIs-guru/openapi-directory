import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeStamp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nanoSeconds" })
  nanoSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=seconds" })
  seconds: number;
}
