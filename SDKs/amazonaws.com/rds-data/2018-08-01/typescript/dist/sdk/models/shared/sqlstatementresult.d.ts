import { SpeakeasyBase } from "../../../internal/utils";
import { ResultFrame } from "./resultframe";
/**
 * <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
export declare class SqlStatementResult extends SpeakeasyBase {
    numberOfRecordsUpdated?: number;
    resultFrame?: ResultFrame;
}
