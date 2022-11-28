import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortInfoSourceTypeEnum } from "./portinfosourcetypeenum";



// InstanceEntry
/** 
 * Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
**/
export class InstanceEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType: string;

  @SpeakeasyMetadata({ data: "json, name=portInfoSource" })
  portInfoSource: PortInfoSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceName" })
  sourceName: string;

  @SpeakeasyMetadata({ data: "json, name=userData" })
  userData?: string;
}
