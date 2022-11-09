import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobManifestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
