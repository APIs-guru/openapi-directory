import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperationGroup } from "./googlecloudapigeev1graphqloperationgroup";
import { GoogleCloudApigeeV1OperationGroup } from "./googlecloudapigeev1operationgroup";

export enum GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum {
    QuotaCounterScopeUnspecified = "QUOTA_COUNTER_SCOPE_UNSPECIFIED"
,    Proxy = "PROXY"
,    Operation = "OPERATION"
}


export class GoogleCloudApigeeV1ApiProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiResources" })
  apiResources?: string[];

  @Metadata({ data: "json, name=approvalType" })
  approvalType?: string;

  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environments" })
  environments?: string[];

  @Metadata({ data: "json, name=graphqlOperationGroup" })
  graphqlOperationGroup?: GoogleCloudApigeeV1GraphQlOperationGroup;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operationGroup" })
  operationGroup?: GoogleCloudApigeeV1OperationGroup;

  @Metadata({ data: "json, name=proxies" })
  proxies?: string[];

  @Metadata({ data: "json, name=quota" })
  quota?: string;

  @Metadata({ data: "json, name=quotaCounterScope" })
  quotaCounterScope?: GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum;

  @Metadata({ data: "json, name=quotaInterval" })
  quotaInterval?: string;

  @Metadata({ data: "json, name=quotaTimeUnit" })
  quotaTimeUnit?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}
