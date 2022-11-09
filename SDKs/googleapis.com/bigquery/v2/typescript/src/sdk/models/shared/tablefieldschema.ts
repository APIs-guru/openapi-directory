import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableFieldSchema } from "./tablefieldschema";


// TableFieldSchemaCategories
/** 
 * [Optional] The categories attached to this field, used for field-level access control.
**/
export class TableFieldSchemaCategories extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}


export class TableFieldSchemaPolicyTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=names" })
  names?: string[];
}


export class TableFieldSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories?: TableFieldSchemaCategories;

  @Metadata({ data: "json, name=collation" })
  collation?: string;

  @Metadata({ data: "json, name=defaultValueExpression" })
  defaultValueExpression?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.TableFieldSchema })
  fields?: TableFieldSchema[];

  @Metadata({ data: "json, name=maxLength" })
  maxLength?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policyTags" })
  policyTags?: TableFieldSchemaPolicyTags;

  @Metadata({ data: "json, name=precision" })
  precision?: string;

  @Metadata({ data: "json, name=scale" })
  scale?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
