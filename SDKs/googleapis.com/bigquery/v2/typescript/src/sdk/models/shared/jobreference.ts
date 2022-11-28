import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
