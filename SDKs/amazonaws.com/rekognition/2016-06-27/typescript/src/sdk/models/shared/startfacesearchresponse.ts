import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartFaceSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
