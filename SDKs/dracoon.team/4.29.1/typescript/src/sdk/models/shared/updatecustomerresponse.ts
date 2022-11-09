import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAttributes } from "./customerattributes";

export enum UpdateCustomerResponseCustomerContractTypeEnum {
    Demo = "demo"
,    Free = "free"
,    Pay = "pay"
}


// UpdateCustomerResponse
/** 
 * Customer information
**/
export class UpdateCustomerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=customerAttributes" })
  customerAttributes?: CustomerAttributes;

  @Metadata({ data: "json, name=customerContractType" })
  customerContractType: UpdateCustomerResponseCustomerContractTypeEnum;

  @Metadata({ data: "json, name=customerUuid" })
  customerUuid: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus: boolean;

  @Metadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @Metadata({ data: "json, name=quotaMax" })
  quotaMax: number;

  @Metadata({ data: "json, name=trialDays" })
  trialDays?: number;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=userMax" })
  userMax: number;

  @Metadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
