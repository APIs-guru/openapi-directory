import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DimensionGroup
/** 
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
**/
export class DimensionGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=Group" })
  group: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;
}
