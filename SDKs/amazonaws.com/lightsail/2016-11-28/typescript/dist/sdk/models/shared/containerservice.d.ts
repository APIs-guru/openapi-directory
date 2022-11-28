import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceDeployment } from "./containerservicedeployment";
import { ResourceLocation } from "./resourcelocation";
import { ContainerServicePowerNameEnum } from "./containerservicepowernameenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { ContainerServiceStateEnum } from "./containerservicestateenum";
import { ContainerServiceStateDetail } from "./containerservicestatedetail";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail container service.
**/
export declare class ContainerService extends SpeakeasyBase {
    arn?: string;
    containerServiceName?: string;
    createdAt?: Date;
    currentDeployment?: ContainerServiceDeployment;
    isDisabled?: boolean;
    location?: ResourceLocation;
    nextDeployment?: ContainerServiceDeployment;
    power?: ContainerServicePowerNameEnum;
    powerId?: string;
    principalArn?: string;
    privateDomainName?: string;
    publicDomainNames?: Map<string, string[]>;
    resourceType?: ResourceTypeEnum;
    scale?: number;
    state?: ContainerServiceStateEnum;
    stateDetail?: ContainerServiceStateDetail;
    tags?: Tag[];
    url?: string;
}
