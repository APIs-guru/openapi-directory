import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BorrowConfiguration
/** 
 * Details about a borrow configuration.
**/
export class BorrowConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowEarlyCheckIn" })
  allowEarlyCheckIn: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxTimeToLiveInMinutes" })
  maxTimeToLiveInMinutes: number;
}
