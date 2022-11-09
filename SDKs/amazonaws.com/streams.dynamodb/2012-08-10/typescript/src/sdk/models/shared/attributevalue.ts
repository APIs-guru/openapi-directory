import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeValue } from "./attributevalue";
import { AttributeValue } from "./attributevalue";


// AttributeValue
/** 
 * <p>Represents the data for an attribute.</p> <p>Each attribute value is described as a name-value pair. The name is the data type, and the value is the data itself.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes">Data Types</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
**/
export class AttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=B" })
  b?: string;

  @Metadata({ data: "json, name=BOOL" })
  bool?: boolean;

  @Metadata({ data: "json, name=BS" })
  bs?: string[];

  @Metadata({ data: "json, name=L", elemType: shared.AttributeValue })
  l?: AttributeValue[];

  @Metadata({ data: "json, name=M", elemType: shared.AttributeValue })
  m?: Map<string, AttributeValue>;

  @Metadata({ data: "json, name=N" })
  n?: string;

  @Metadata({ data: "json, name=NS" })
  ns?: string[];

  @Metadata({ data: "json, name=NULL" })
  null?: boolean;

  @Metadata({ data: "json, name=S" })
  s?: string;

  @Metadata({ data: "json, name=SS" })
  ss?: string[];
}
