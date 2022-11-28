import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";



export class GetInstancesHealthStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: Map<string, HealthStatusEnum>;
}
