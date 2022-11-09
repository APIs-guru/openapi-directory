import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";
import { RateLimit } from "./ratelimit";


export class RateLimitOverviewResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=code_scanning_upload" })
  codeScanningUpload?: RateLimit;

  @Metadata({ data: "json, name=core" })
  core: RateLimit;

  @Metadata({ data: "json, name=graphql" })
  graphql?: RateLimit;

  @Metadata({ data: "json, name=integration_manifest" })
  integrationManifest?: RateLimit;

  @Metadata({ data: "json, name=search" })
  search: RateLimit;

  @Metadata({ data: "json, name=source_import" })
  sourceImport?: RateLimit;
}


// RateLimitOverview
/** 
 * Rate Limit Overview
**/
export class RateLimitOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=rate" })
  rate: RateLimit;

  @Metadata({ data: "json, name=resources" })
  resources: RateLimitOverviewResources;
}
