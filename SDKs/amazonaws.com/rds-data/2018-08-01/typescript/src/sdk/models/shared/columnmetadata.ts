import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ColumnMetadata
/** 
 * Contains the metadata for a column.
**/
export class ColumnMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayBaseColumnType" })
  arrayBaseColumnType?: number;

  @Metadata({ data: "json, name=isAutoIncrement" })
  isAutoIncrement?: boolean;

  @Metadata({ data: "json, name=isCaseSensitive" })
  isCaseSensitive?: boolean;

  @Metadata({ data: "json, name=isCurrency" })
  isCurrency?: boolean;

  @Metadata({ data: "json, name=isSigned" })
  isSigned?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nullable" })
  nullable?: number;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=scale" })
  scale?: number;

  @Metadata({ data: "json, name=schemaName" })
  schemaName?: string;

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;

  @Metadata({ data: "json, name=typeName" })
  typeName?: string;
}
