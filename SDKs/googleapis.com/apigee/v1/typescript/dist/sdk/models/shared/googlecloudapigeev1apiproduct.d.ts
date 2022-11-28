import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperationGroup } from "./googlecloudapigeev1graphqloperationgroup";
import { GoogleCloudApigeeV1OperationGroup } from "./googlecloudapigeev1operationgroup";
export declare enum GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum {
    QuotaCounterScopeUnspecified = "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
    Proxy = "PROXY",
    Operation = "OPERATION"
}
export declare class GoogleCloudApigeeV1ApiProduct extends SpeakeasyBase {
    apiResources?: string[];
    approvalType?: string;
    attributes?: GoogleCloudApigeeV1Attribute[];
    createdAt?: string;
    description?: string;
    displayName?: string;
    environments?: string[];
    graphqlOperationGroup?: GoogleCloudApigeeV1GraphQlOperationGroup;
    lastModifiedAt?: string;
    name?: string;
    operationGroup?: GoogleCloudApigeeV1OperationGroup;
    proxies?: string[];
    quota?: string;
    quotaCounterScope?: GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum;
    quotaInterval?: string;
    quotaTimeUnit?: string;
    scopes?: string[];
}
