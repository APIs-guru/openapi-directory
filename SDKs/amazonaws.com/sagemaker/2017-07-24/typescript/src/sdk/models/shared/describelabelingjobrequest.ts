import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLabelingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;
}
