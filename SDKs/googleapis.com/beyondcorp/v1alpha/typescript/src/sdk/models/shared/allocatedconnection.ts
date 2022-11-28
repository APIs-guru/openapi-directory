import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllocatedConnection
/** 
 * Allocated connection of the AppGateway.
**/
export class AllocatedConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ingressPort" })
  ingressPort?: number;

  @SpeakeasyMetadata({ data: "json, name=pscUri" })
  pscUri?: string;
}
