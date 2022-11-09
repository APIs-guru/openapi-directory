import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FundingSource
/** 
 * This type provided details on the funding source for the transfer.
**/
export class FundingSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
