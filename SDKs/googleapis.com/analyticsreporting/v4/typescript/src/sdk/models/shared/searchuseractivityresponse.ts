import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserActivitySession } from "./useractivitysession";



// SearchUserActivityResponse
/** 
 * The response from `userActivity:get` call.
**/
export class SearchUserActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleRate" })
  sampleRate?: number;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: UserActivitySession })
  sessions?: UserActivitySession[];

  @SpeakeasyMetadata({ data: "json, name=totalRows" })
  totalRows?: number;
}
