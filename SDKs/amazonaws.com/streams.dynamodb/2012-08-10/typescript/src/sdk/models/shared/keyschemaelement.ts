import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyTypeEnum } from "./keytypeenum";



// KeySchemaElement
/** 
 * <p>Represents <i>a single element</i> of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.</p> <p>A <code>KeySchemaElement</code> represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one <code>KeySchemaElement</code> (for the partition key). A composite primary key would require one <code>KeySchemaElement</code> for the partition key, and another <code>KeySchemaElement</code> for the sort key.</p> <p>A <code>KeySchemaElement</code> must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.</p>
**/
export class KeySchemaElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeName" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "json, name=KeyType" })
  keyType: KeyTypeEnum;
}
