import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EndpointsApiServiceRolloutStrategyEnum {
    UnspecifiedRolloutStrategy = "UNSPECIFIED_ROLLOUT_STRATEGY"
,    Fixed = "FIXED"
,    Managed = "MANAGED"
}


// EndpointsApiService
/** 
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
**/
export class EndpointsApiService extends SpeakeasyBase {
  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=disableTraceSampling" })
  disableTraceSampling?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rolloutStrategy" })
  rolloutStrategy?: EndpointsApiServiceRolloutStrategyEnum;
}
