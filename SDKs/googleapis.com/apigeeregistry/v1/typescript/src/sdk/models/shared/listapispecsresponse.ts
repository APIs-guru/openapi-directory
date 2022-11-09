import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiSpec } from "./apispec";


// ListApiSpecsResponse
/** 
 * Response message for ListApiSpecs.
**/
export class ListApiSpecsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiSpecs", elemType: shared.ApiSpec })
  apiSpecs?: ApiSpec[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
