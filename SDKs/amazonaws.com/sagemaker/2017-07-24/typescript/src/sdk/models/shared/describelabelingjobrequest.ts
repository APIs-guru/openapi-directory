import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLabelingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelingJobName" })
  labelingJobName: string;
}
