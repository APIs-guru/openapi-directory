import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceInstanceSummary } from "./serviceinstancesummary";


export class ListServiceInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=serviceInstances", elemType: shared.ServiceInstanceSummary })
  serviceInstances: ServiceInstanceSummary[];
}
