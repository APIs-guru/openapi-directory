import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperationGroup } from "./googlecloudapigeev1graphqloperationgroup";
import { GoogleCloudApigeeV1OperationGroup } from "./googlecloudapigeev1operationgroup";


export enum GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum {
    QuotaCounterScopeUnspecified = "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
    Proxy = "PROXY",
    Operation = "OPERATION"
}


export class GoogleCloudApigeeV1ApiProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiResources" })
  apiResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=approvalType" })
  approvalType?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute })
  attributes?: GoogleCloudApigeeV1Attribute[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=environments" })
  environments?: string[];

  @SpeakeasyMetadata({ data: "json, name=graphqlOperationGroup" })
  graphqlOperationGroup?: GoogleCloudApigeeV1GraphQlOperationGroup;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operationGroup" })
  operationGroup?: GoogleCloudApigeeV1OperationGroup;

  @SpeakeasyMetadata({ data: "json, name=proxies" })
  proxies?: string[];

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaCounterScope" })
  quotaCounterScope?: GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=quotaInterval" })
  quotaInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaTimeUnit" })
  quotaTimeUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}
