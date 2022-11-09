import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";


export class UpdateContainerServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "json, name=power" })
  power?: ContainerServicePowerNameEnum;

  @Metadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @Metadata({ data: "json, name=scale" })
  scale?: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;
}
