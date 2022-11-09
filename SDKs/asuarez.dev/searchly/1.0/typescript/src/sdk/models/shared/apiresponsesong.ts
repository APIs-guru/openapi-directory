import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ApiResponseSongResponseResults
/** 
 * Song item.
**/
export class ApiResponseSongResponseResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// ApiResponseSongResponse
/** 
 * Contains the response data if the request was successful.
**/
export class ApiResponseSongResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.ApiResponseSongResponseResults })
  results?: ApiResponseSongResponseResults[];
}


export class ApiResponseSong extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=response" })
  response?: ApiResponseSongResponse;
}
