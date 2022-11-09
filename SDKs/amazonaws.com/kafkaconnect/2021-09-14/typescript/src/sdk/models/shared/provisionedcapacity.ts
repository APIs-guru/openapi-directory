import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedCapacity
/** 
 * Details about a connector's provisioned capacity.
**/
export class ProvisionedCapacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @Metadata({ data: "json, name=workerCount" })
  workerCount: number;
}
