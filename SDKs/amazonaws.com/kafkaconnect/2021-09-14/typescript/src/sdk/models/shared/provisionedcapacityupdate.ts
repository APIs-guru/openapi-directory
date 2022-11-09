import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedCapacityUpdate
/** 
 * An update to a connector's fixed capacity.
**/
export class ProvisionedCapacityUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=mcuCount" })
  mcuCount: number;

  @Metadata({ data: "json, name=workerCount" })
  workerCount: number;
}
