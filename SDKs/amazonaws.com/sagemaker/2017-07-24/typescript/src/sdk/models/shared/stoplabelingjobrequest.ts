import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopLabelingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;
}
