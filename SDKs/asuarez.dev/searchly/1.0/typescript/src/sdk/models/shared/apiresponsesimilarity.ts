import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApiResponseSimilarityResponseSimilarityList
/** 
 * Song similarity item.
**/
export class ApiResponseSimilarityResponseSimilarityList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artist_name" })
  artistName?: string;

  @SpeakeasyMetadata({ data: "json, name=artist_url" })
  artistUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=index_id" })
  indexId?: number;

  @SpeakeasyMetadata({ data: "json, name=lyrics" })
  lyrics?: string;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;

  @SpeakeasyMetadata({ data: "json, name=song_name" })
  songName?: string;

  @SpeakeasyMetadata({ data: "json, name=song_url" })
  songUrl?: string;
}


// ApiResponseSimilarityResponse
/** 
 * Contains the response data if the request was successful.
**/
export class ApiResponseSimilarityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=similarity_list", elemType: ApiResponseSimilarityResponseSimilarityList })
  similarityList?: ApiResponseSimilarityResponseSimilarityList[];
}


export class ApiResponseSimilarity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: ApiResponseSimilarityResponse;
}
