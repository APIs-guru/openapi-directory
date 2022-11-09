import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAttributeValuesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
