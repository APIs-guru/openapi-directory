import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";



export class UpdateContainerServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power?: ContainerServicePowerNameEnum;

  @SpeakeasyMetadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;
}
