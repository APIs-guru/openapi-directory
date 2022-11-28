import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ColumnMetadata
/** 
 * The properties (metadata) of a column. 
**/
export class ColumnMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnDefault" })
  columnDefault?: string;

  @SpeakeasyMetadata({ data: "json, name=isCaseSensitive" })
  isCaseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isCurrency" })
  isCurrency?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSigned" })
  isSigned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nullable" })
  nullable?: number;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "json, name=schemaName" })
  schemaName?: string;

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;
}
