import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// RateLimit
/** 
 * This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
**/
export class RateLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiContext" })
  apiContext?: string;

  @Metadata({ data: "json, name=apiName" })
  apiName?: string;

  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Resource })
  resources?: Resource[];
}
