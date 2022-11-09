import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateData
/** 
 * Buyers are allowed to store certain types of private data in a proposal/deal.
**/
export class PrivateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=referenceId" })
  referenceId?: string;
}
