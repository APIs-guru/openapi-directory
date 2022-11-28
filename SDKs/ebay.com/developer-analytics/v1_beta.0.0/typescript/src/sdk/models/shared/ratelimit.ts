import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// RateLimit
/** 
 * This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
**/
export class RateLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiContext" })
  apiContext?: string;

  @SpeakeasyMetadata({ data: "json, name=apiName" })
  apiName?: string;

  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Resource })
  resources?: Resource[];
}
