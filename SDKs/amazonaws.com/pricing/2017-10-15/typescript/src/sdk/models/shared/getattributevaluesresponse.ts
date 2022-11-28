import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class GetAttributeValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeValues", elemType: AttributeValue })
  attributeValues?: AttributeValue[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
