import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResolvedTargets
/** 
 * Information about targets that resolved during the Automation execution.
**/
export class ResolvedTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterValues" })
  parameterValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
