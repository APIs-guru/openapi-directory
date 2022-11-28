import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";


export enum CustomerCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}


// Customer
/** 
 * Customer information
**/
export class Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=customerAttributes" })
  customerAttributes?: CustomerAttributes;

  @SpeakeasyMetadata({ data: "json, name=customerContractType" })
  customerContractType: CustomerCustomerContractTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=customerUuid" })
  customerUuid: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastLoginAt" })
  lastLoginAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus: boolean;

  @SpeakeasyMetadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaMax" })
  quotaMax: number;

  @SpeakeasyMetadata({ data: "json, name=quotaUsed" })
  quotaUsed: number;

  @SpeakeasyMetadata({ data: "json, name=trialDaysLeft" })
  trialDaysLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=userMax" })
  userMax: number;

  @SpeakeasyMetadata({ data: "json, name=userUsed" })
  userUsed: number;

  @SpeakeasyMetadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
