import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateClassificationJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;
}
