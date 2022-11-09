import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AllocatedConnection
/** 
 * Allocated connection of the AppGateway.
**/
export class AllocatedConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @Metadata({ data: "json, name=pscUri" })
  pscUri?: string;
}
