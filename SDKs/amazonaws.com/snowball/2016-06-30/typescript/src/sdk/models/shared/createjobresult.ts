import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateJobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
