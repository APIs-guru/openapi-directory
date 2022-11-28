import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAttributes } from "./customerattributes";
import { FirstAdminUser } from "./firstadminuser";


export enum NewCustomerResponseCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}


// NewCustomerResponse
/** 
 * Customer information
**/
export class NewCustomerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerAttributes" })
  customerAttributes?: CustomerAttributes;

  @SpeakeasyMetadata({ data: "json, name=customerContractType" })
  customerContractType: NewCustomerResponseCustomerContractTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=customerUuid" })
  customerUuid: string;

  @SpeakeasyMetadata({ data: "json, name=firstAdminUser" })
  firstAdminUser: FirstAdminUser;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus: boolean;

  @SpeakeasyMetadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaMax" })
  quotaMax: number;

  @SpeakeasyMetadata({ data: "json, name=trialDays" })
  trialDays?: number;

  @SpeakeasyMetadata({ data: "json, name=userMax" })
  userMax: number;

  @SpeakeasyMetadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
