import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=job_id" })
  jobId?: string;
}
