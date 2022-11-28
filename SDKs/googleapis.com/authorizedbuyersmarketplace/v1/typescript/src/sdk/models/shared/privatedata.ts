import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateData
/** 
 * Buyers are allowed to store certain types of private data in a proposal or deal.
**/
export class PrivateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;
}
