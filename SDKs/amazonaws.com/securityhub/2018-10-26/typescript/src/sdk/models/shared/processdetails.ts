import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProcessDetails
/** 
 * The details of process-related information about a finding.
**/
export class ProcessDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ParentPid" })
  parentPid?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Pid" })
  pid?: number;

  @Metadata({ data: "json, name=TerminatedAt" })
  terminatedAt?: string;
}
