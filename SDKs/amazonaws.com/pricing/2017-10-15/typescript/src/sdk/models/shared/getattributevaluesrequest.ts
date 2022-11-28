import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAttributeValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceCode" })
  serviceCode: string;
}
