import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiSpec } from "./apispec";



// ListApiSpecsResponse
/** 
 * Response message for ListApiSpecs.
**/
export class ListApiSpecsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiSpecs", elemType: ApiSpec })
  apiSpecs?: ApiSpec[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
