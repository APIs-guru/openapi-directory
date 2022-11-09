import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResolvedTargets
/** 
 * Information about targets that resolved during the Automation execution.
**/
export class ResolvedTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterValues" })
  parameterValues?: string[];

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
