import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Traffic extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=uniques" })
  uniques: number;
}
