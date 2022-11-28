import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableFieldSchemaCategories
/** 
 * [Optional] The categories attached to this field, used for field-level access control.
**/
export class TableFieldSchemaCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}


export class TableFieldSchemaPolicyTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: string[];
}


export class TableFieldSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: TableFieldSchemaCategories;

  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultValueExpression" })
  defaultValueExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: TableFieldSchema })
  fields?: TableFieldSchema[];

  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTags" })
  policyTags?: TableFieldSchemaPolicyTags;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: string;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
