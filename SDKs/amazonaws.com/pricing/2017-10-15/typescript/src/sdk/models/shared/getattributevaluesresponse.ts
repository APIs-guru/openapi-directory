import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";


export class GetAttributeValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeValues", elemType: shared.AttributeValue })
  attributeValues?: AttributeValue[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
