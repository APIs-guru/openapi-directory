import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAssociatedRoute53HealthChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HealthCheckIds" })
  healthCheckIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
