import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetLocation
/** 
 * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
**/
export class TargetLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accounts" })
  accounts?: string[];

  @Metadata({ data: "json, name=ExecutionRoleName" })
  executionRoleName?: string;

  @Metadata({ data: "json, name=Regions" })
  regions?: string[];

  @Metadata({ data: "json, name=TargetLocationMaxConcurrency" })
  targetLocationMaxConcurrency?: string;

  @Metadata({ data: "json, name=TargetLocationMaxErrors" })
  targetLocationMaxErrors?: string;
}
