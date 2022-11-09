import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateCustomerRequestCustomerContractTypeEnum {
    Demo = "demo"
,    Free = "free"
,    Pay = "pay"
}


// UpdateCustomerRequest
/** 
 * Request model for updating a customer
**/
export class UpdateCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=companyName" })
  companyName?: string;

  @Metadata({ data: "json, name=customerContractType" })
  customerContractType: UpdateCustomerRequestCustomerContractTypeEnum;

  @Metadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @Metadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @Metadata({ data: "json, name=quotaMax" })
  quotaMax?: number;

  @Metadata({ data: "json, name=userMax" })
  userMax?: number;

  @Metadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
