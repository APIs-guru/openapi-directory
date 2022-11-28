import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ResourceLocation } from "./resourcelocation";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=containerServiceName" })
  containerServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=currentDeployment" })
  currentDeployment?: ContainerServiceDeployment;

  @SpeakeasyMetadata({ data: "json, name=isDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=nextDeployment" })
  nextDeployment?: ContainerServiceDeployment;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power?: ContainerServicePowerNameEnum;

  @SpeakeasyMetadata({ data: "json, name=powerId" })
  powerId?: string;

  @SpeakeasyMetadata({ data: "json, name=principalArn" })
  principalArn?: string;

  @SpeakeasyMetadata({ data: "json, name=privateDomainName" })
  privateDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=publicDomainNames" })
  publicDomainNames?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ContainerServiceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateDetail" })
  stateDetail?: ContainerServiceStateDetail;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
