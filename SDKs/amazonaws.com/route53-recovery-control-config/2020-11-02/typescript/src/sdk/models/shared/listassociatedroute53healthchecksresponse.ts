import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAssociatedRoute53HealthChecksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HealthCheckIds" })
  healthCheckIds?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
