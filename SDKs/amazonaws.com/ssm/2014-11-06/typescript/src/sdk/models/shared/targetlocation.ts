import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetLocation
/** 
 * The combination of Amazon Web Services Regions and Amazon Web Services accounts targeted by the current Automation execution.
**/
export class TargetLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accounts" })
  accounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=ExecutionRoleName" })
  executionRoleName?: string;

  @SpeakeasyMetadata({ data: "json, name=Regions" })
  regions?: string[];

  @SpeakeasyMetadata({ data: "json, name=TargetLocationMaxConcurrency" })
  targetLocationMaxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetLocationMaxErrors" })
  targetLocationMaxErrors?: string;
}
