import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultFrame } from "./resultframe";



// SqlStatementResult
/** 
 * <p>The result of a SQL statement.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
export class SqlStatementResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberOfRecordsUpdated" })
  numberOfRecordsUpdated?: number;

  @SpeakeasyMetadata({ data: "json, name=resultFrame" })
  resultFrame?: ResultFrame;
}
