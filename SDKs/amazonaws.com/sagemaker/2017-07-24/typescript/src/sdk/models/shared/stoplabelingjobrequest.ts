import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopLabelingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;
}
