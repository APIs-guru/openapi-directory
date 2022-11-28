import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";



// Runbook
/** 
 * <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
**/
export class Runbook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation })
  targetLocations?: TargetLocation[];

  @SpeakeasyMetadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];
}
