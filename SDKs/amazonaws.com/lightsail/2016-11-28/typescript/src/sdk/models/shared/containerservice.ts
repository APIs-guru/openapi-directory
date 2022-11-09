import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ResourceLocation } from "./resourcelocation";
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContainerServiceStateEnum } from "./containerservicestateenum";
import { ContainerServiceStateDetail } from "./containerservicestatedetail";
import { Tag } from "./tag";


// ContainerService
/** 
 * Describes an Amazon Lightsail container service.
**/
export class ContainerService extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=containerServiceName" })
  containerServiceName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currentDeployment" })
  currentDeployment?: ContainerServiceDeployment;

  @Metadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=nextDeployment" })
  nextDeployment?: ContainerServiceDeployment;

  @Metadata({ data: "json, name=power" })
  power?: ContainerServicePowerNameEnum;

  @Metadata({ data: "json, name=powerId" })
  powerId?: string;

  @Metadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @Metadata({ data: "json, name=privateDomainName" })
  privateDomainName?: string;

  @Metadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=scale" })
  scale?: number;

  @Metadata({ data: "json, name=state" })
  state?: ContainerServiceStateEnum;

  @Metadata({ data: "json, name=stateDetail" })
  stateDetail?: ContainerServiceStateDetail;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
