import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CanaryRunStatus } from "./canaryrunstatus";
import { CanaryRunTimeline } from "./canaryruntimeline";


// CanaryRun
/** 
 * This structure contains the details about one run of one canary.
**/
export class CanaryRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: CanaryRunStatus;

  @Metadata({ data: "json, name=Timeline" })
  timeline?: CanaryRunTimeline;
}
