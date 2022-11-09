import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateLabelingJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn: string;
}
