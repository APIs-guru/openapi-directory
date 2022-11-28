import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiResponseSongResponseResults
/** 
 * Song item.
**/
export class ApiResponseSongResponseResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ApiResponseSongResponse
/** 
 * Contains the response data if the request was successful.
**/
export class ApiResponseSongResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: ApiResponseSongResponseResults })
  results?: ApiResponseSongResponseResults[];
}


export class ApiResponseSong extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: ApiResponseSongResponse;
}
