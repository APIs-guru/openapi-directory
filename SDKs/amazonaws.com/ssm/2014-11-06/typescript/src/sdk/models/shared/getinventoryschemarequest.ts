import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInventorySchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Aggregator" })
  aggregator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SubType" })
  subType?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName?: string;
}
