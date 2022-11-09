import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopAutoMlJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;
}
