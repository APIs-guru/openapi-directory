import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HealthStatusEnum } from "./healthstatusenum";


export class GetInstancesHealthStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Status" })
  status?: Map<string, HealthStatusEnum>;
}
