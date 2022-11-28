import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KycCheck
/** 
 * This type is used to provide details about any KYC check that is applicable to the managed payments seller.
**/
export class KycCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alert" })
  alert?: string;

  @SpeakeasyMetadata({ data: "json, name=dataRequired" })
  dataRequired?: string;

  @SpeakeasyMetadata({ data: "json, name=detailMessage" })
  detailMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=remedyUrl" })
  remedyUrl?: string;
}
