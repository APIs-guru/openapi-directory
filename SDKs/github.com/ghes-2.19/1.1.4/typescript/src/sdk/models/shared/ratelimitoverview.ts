import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateLimit } from "./ratelimit";



export class RateLimitOverviewResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code_scanning_upload" })
  codeScanningUpload?: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=core" })
  core: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=graphql" })
  graphql?: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=integration_manifest" })
  integrationManifest?: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=search" })
  search: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=source_import" })
  sourceImport?: RateLimit;
}


// RateLimitOverview
/** 
 * Rate Limit Overview
**/
export class RateLimitOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: RateLimit;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources: RateLimitOverviewResources;
}
