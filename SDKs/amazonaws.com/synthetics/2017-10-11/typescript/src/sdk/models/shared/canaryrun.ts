import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CanaryRunStatus } from "./canaryrunstatus";
import { CanaryRunTimeline } from "./canaryruntimeline";



// CanaryRun
/** 
 * This structure contains the details about one run of one canary.
**/
export class CanaryRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactS3Location" })
  artifactS3Location?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: CanaryRunStatus;

  @SpeakeasyMetadata({ data: "json, name=Timeline" })
  timeline?: CanaryRunTimeline;
}
