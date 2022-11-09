import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShareError } from "./shareerror";


// ShareDetails
/** 
 * Information about the portfolio share operation.
**/
export class ShareDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShareErrors", elemType: shared.ShareError })
  shareErrors?: ShareError[];

  @Metadata({ data: "json, name=SuccessfulShares" })
  successfulShares?: string[];
}
