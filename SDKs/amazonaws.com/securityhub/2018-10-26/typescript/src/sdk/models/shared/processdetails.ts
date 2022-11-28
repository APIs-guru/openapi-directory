import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProcessDetails
/** 
 * The details of process-related information about a finding.
**/
export class ProcessDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentPid" })
  parentPid?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Pid" })
  pid?: number;

  @SpeakeasyMetadata({ data: "json, name=TerminatedAt" })
  terminatedAt?: string;
}
