import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpInstanceSummary } from "./httpinstancesummary";


export class DiscoverInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Instances", elemType: shared.HttpInstanceSummary })
  instances?: HttpInstanceSummary[];
}
