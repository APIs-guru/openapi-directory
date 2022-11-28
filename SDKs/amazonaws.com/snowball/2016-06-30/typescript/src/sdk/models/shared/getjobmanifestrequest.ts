import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobManifestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
