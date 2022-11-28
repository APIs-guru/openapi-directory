import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsDynamoDbTableAttributeDefinition
/** 
 * Contains a definition of an attribute for the table.
**/
export class AwsDynamoDbTableAttributeDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType?: string;
}
