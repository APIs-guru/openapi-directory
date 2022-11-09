import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BorrowConfiguration
/** 
 * Details about a borrow configuration.
**/
export class BorrowConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowEarlyCheckIn" })
  allowEarlyCheckIn: boolean;

  @Metadata({ data: "json, name=MaxTimeToLiveInMinutes" })
  maxTimeToLiveInMinutes: number;
}
