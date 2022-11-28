import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInstanceSummary } from "./serviceinstancesummary";



export class ListServiceInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceInstances", elemType: ServiceInstanceSummary })
  serviceInstances: ServiceInstanceSummary[];
}
