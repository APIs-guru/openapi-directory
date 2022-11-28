import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeploymentRequest } from "./containerservicedeploymentrequest";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { Tag } from "./tag";



export class CreateContainerServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: ContainerServiceDeploymentRequest;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power: ContainerServicePowerNameEnum;

  @SpeakeasyMetadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
