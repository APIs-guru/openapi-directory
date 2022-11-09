import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeStamp extends SpeakeasyBase {
  @Metadata({ data: "json, name=nanoSeconds" })
  nanoSeconds: number;

  @Metadata({ data: "json, name=seconds" })
  seconds: number;
}
