import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsDynamoDbTableAttributeDefinition
/** 
 * Contains a definition of an attribute for the table.
**/
export class AwsDynamoDbTableAttributeDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=AttributeType" })
  attributeType?: string;
}
