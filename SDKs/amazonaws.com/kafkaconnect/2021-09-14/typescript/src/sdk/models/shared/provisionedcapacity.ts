import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedCapacity
/** 
 * Details about a connector's provisioned capacity.
**/
export class ProvisionedCapacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount: number;
}
