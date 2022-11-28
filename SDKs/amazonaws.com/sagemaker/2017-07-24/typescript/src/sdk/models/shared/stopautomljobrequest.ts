import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopAutoMlJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoMLJobName" })
  autoMlJobName: string;
}
