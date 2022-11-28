import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusFilterEnum } from "./healthstatusfilterenum";



export class DiscoverInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthStatus" })
  healthStatus?: HealthStatusFilterEnum;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NamespaceName" })
  namespaceName: string;

  @SpeakeasyMetadata({ data: "json, name=OptionalParameters" })
  optionalParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=QueryParameters" })
  queryParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName: string;
}
