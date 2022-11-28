import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UpdateCustomerRequestCustomerContractTypeEnum {
    Demo = "demo",
    Free = "free",
    Pay = "pay"
}


// UpdateCustomerRequest
/** 
 * Request model for updating a customer
**/
export class UpdateCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=customerContractType" })
  customerContractType: UpdateCustomerRequestCustomerContractTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=providerCustomerId" })
  providerCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaMax" })
  quotaMax?: number;

  @SpeakeasyMetadata({ data: "json, name=userMax" })
  userMax?: number;

  @SpeakeasyMetadata({ data: "json, name=webhooksMax" })
  webhooksMax?: number;
}
