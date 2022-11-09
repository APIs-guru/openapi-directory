import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ColumnMetadata
/** 
 * The properties (metadata) of a column. 
**/
export class ColumnMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnDefault" })
  columnDefault?: string;

  @Metadata({ data: "json, name=isCaseSensitive" })
  isCaseSensitive?: boolean;

  @Metadata({ data: "json, name=isCurrency" })
  isCurrency?: boolean;

  @Metadata({ data: "json, name=isSigned" })
  isSigned?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=length" })
  length?: number;

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

  @Metadata({ data: "json, name=typeName" })
  typeName?: string;
}
