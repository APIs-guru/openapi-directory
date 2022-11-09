import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KycCheck
/** 
 * This type is used to provide details about any KYC check that is applicable to the managed payments seller.
**/
export class KycCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=alert" })
  alert?: string;

  @Metadata({ data: "json, name=dataRequired" })
  dataRequired?: string;

  @Metadata({ data: "json, name=detailMessage" })
  detailMessage?: string;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @Metadata({ data: "json, name=remedyUrl" })
  remedyUrl?: string;
}
