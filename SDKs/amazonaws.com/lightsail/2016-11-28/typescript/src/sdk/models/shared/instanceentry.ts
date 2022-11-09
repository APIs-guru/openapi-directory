import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortInfoSourceTypeEnum } from "./portinfosourcetypeenum";


// InstanceEntry
/** 
 * Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation.
**/
export class InstanceEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilityZone" })
  availabilityZone: string;

  @Metadata({ data: "json, name=instanceType" })
  instanceType: string;

  @Metadata({ data: "json, name=portInfoSource" })
  portInfoSource: PortInfoSourceTypeEnum;

  @Metadata({ data: "json, name=sourceName" })
  sourceName: string;

  @Metadata({ data: "json, name=userData" })
  userData?: string;
}
