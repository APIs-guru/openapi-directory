import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MxRecords extends SpeakeasyBase {
  @Metadata({ data: "json, name=exchange" })
  exchange?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;
}
