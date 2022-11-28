import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerServicePower
/** 
 * <p>Describes the powers that can be specified for an Amazon Lightsail container service.</p> <p>The power specifies the amount of RAM, the number of vCPUs, and the base price of the container service.</p>
**/
export class ContainerServicePower extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=powerId" })
  powerId?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
