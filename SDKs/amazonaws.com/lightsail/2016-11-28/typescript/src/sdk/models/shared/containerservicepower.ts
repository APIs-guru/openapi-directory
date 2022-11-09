import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerServicePower
/** 
 * <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
**/
export class ContainerServicePower extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=powerId" })
  powerId?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
