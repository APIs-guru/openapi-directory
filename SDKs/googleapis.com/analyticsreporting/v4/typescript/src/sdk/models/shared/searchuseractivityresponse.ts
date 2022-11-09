import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserActivitySession } from "./useractivitysession";


// SearchUserActivityResponse
/** 
 * The response from `userActivity:get` call.
**/
export class SearchUserActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sampleRate" })
  sampleRate?: number;

  @Metadata({ data: "json, name=sessions", elemType: shared.UserActivitySession })
  sessions?: UserActivitySession[];

  @Metadata({ data: "json, name=totalRows" })
  totalRows?: number;
}
