import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerServiceDeploymentRequest } from "./containerservicedeploymentrequest";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { Tag } from "./tag";


export class CreateContainerServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployment" })
  deployment?: ContainerServiceDeploymentRequest;

  @Metadata({ data: "json, name=power" })
  power: ContainerServicePowerNameEnum;

  @Metadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @Metadata({ data: "json, name=scale" })
  scale: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
