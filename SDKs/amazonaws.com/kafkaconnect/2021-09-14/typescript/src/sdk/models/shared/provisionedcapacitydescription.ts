import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvisionedCapacityDescription
/** 
 * The description of a connector's provisioned capacity.
**/
export class ProvisionedCapacityDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=mcuCount" })
  mcuCount?: number;

  @Metadata({ data: "json, name=workerCount" })
  workerCount?: number;
}
