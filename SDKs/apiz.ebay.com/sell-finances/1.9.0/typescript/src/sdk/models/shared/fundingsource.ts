import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FundingSource
/** 
 * This type provided details on the funding source for the transfer.
**/
export class FundingSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
