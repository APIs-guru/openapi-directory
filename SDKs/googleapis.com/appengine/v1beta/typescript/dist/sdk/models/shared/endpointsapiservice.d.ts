import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EndpointsApiServiceRolloutStrategyEnum {
    UnspecifiedRolloutStrategy = "UNSPECIFIED_ROLLOUT_STRATEGY",
    Fixed = "FIXED",
    Managed = "MANAGED"
}
/**
 * Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
**/
export declare class EndpointsApiService extends SpeakeasyBase {
    configId?: string;
    disableTraceSampling?: boolean;
    name?: string;
    rolloutStrategy?: EndpointsApiServiceRolloutStrategyEnum;
}
