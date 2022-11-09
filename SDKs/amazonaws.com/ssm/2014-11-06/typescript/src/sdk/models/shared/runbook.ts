import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";


// Runbook
/** 
 * <p>Information about an Automation runbook used in a runbook workflow in Change Manager.</p> <note> <p>The Automation runbooks specified for the runbook workflow can't run until all required approvals for the change request have been received.</p> </note>
**/
export class Runbook extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentName" })
  documentName: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=TargetLocations", elemType: shared.TargetLocation })
  targetLocations?: TargetLocation[];

  @Metadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];
}
