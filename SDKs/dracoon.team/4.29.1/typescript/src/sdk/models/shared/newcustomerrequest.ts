import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerAttributes } from "./customerattributes";
import { FirstAdminUser } from "./firstadminuser";

export enum NewCustomerRequestCustomerContractTypeEnum {
    Demo = "demo"
,    Free = "free"
,    Pay = "pay"
}


// NewCustomerRequest
/** 
 * Request model for creating a customer
**/
export class NewCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationCode" })
  activationCode?: string;

  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=customerAttributes" })
  customerAttributes?: CustomerAttributes;

  @Metadata({ data: "json, name=customerContractType" })
  customerContractType: NewCustomerRequestCustomerContractTypeEnum;

  @Metadata({ data: "json, name=firstAdminUser" })
  firstAdminUser: FirstAdminUser;

  @Metadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @Metadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @Metadata({ data: "json, name=quotaMax" })
  quotaMax: number;

  @Metadata({ data: "json, name=trialDays" })
  trialDays?: number;

  @Metadata({ data: "json, name=userMax" })
  userMax: number;

  @Metadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
