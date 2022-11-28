import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedCapacityDescription
/** 
 * The description of a connector's provisioned capacity.
**/
export class ProvisionedCapacityDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount?: number;
}
