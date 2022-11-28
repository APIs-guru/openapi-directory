import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A logical grouping of Performance Insights metrics for a related subject area. For example, the <code>db.sql</code> dimension group consists of the following dimensions: <code>db.sql.id</code>, <code>db.sql.db_id</code>, <code>db.sql.statement</code>, and <code>db.sql.tokenized_id</code>.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
**/
export declare class DimensionGroup extends SpeakeasyBase {
    dimensions?: string[];
    group: string;
    limit?: number;
}
