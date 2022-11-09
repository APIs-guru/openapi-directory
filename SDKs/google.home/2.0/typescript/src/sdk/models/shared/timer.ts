import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Timer extends SpeakeasyBase {
  @Metadata({ data: "json, name=fire_time" })
  fireTime: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=original_duration" })
  originalDuration: number;

  @Metadata({ data: "json, name=status" })
  status: number;
}
