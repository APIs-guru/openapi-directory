import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ApiResponseSimilarityResponseSimilarityList
/** 
 * Song similarity item.
**/
export class ApiResponseSimilarityResponseSimilarityList extends SpeakeasyBase {
  @Metadata({ data: "json, name=artist_name" })
  artistName?: string;

  @Metadata({ data: "json, name=artist_url" })
  artistUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=index_id" })
  indexId?: number;

  @Metadata({ data: "json, name=lyrics" })
  lyrics?: string;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=song_name" })
  songName?: string;

  @Metadata({ data: "json, name=song_url" })
  songUrl?: string;
}


// ApiResponseSimilarityResponse
/** 
 * Contains the response data if the request was successful.
**/
export class ApiResponseSimilarityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=similarity_list", elemType: shared.ApiResponseSimilarityResponseSimilarityList })
  similarityList?: ApiResponseSimilarityResponseSimilarityList[];
}


export class ApiResponseSimilarity extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=response" })
  response?: ApiResponseSimilarityResponse;
}
