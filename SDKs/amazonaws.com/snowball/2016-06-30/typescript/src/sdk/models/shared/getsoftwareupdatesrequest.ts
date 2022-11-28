import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSoftwareUpdatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
