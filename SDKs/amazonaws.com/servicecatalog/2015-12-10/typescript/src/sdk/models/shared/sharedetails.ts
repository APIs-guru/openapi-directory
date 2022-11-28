import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareError } from "./shareerror";



// ShareDetails
/** 
 * Information about the portfolio share operation.
**/
export class ShareDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShareErrors", elemType: ShareError })
  shareErrors?: ShareError[];

  @SpeakeasyMetadata({ data: "json, name=SuccessfulShares" })
  successfulShares?: string[];
}
