import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobsFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=job_id" })
  jobId?: string;
}
