import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
