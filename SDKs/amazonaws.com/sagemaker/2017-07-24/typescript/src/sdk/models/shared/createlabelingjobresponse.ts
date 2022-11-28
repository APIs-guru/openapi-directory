import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLabelingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;
}
