import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiSpec } from "./apispec";


// ListApiSpecRevisionsResponse
/** 
 * Response message for ListApiSpecRevisionsResponse.
**/
export class ListApiSpecRevisionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiSpecs", elemType: shared.ApiSpec })
  apiSpecs?: ApiSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
