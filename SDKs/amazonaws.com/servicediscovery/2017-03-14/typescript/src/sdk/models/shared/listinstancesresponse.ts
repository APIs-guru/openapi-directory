import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceSummary } from "./instancesummary";


export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.InstanceSummary })
  instances?: InstanceSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
