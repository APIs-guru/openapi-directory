import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvisionedCapacityUpdate
/** 
 * An update to a connector's fixed capacity.
**/
export class ProvisionedCapacityUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount: number;
}
