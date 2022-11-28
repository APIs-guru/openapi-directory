import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiSpec } from "./apispec";



// ListApiSpecRevisionsResponse
/** 
 * Response message for ListApiSpecRevisionsResponse.
**/
export class ListApiSpecRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSpecs", elemType: ApiSpec })
  apiSpecs?: ApiSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
