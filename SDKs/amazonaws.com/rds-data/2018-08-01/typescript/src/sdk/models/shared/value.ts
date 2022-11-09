import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";
import { StructValue } from "./structvalue";


// Value
/** 
 * <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
export class Value extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayValues", elemType: shared.Value })
  arrayValues?: Value[];

  @Metadata({ data: "json, name=bigIntValue" })
  bigIntValue?: number;

  @Metadata({ data: "json, name=bitValue" })
  bitValue?: boolean;

  @Metadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @Metadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @Metadata({ data: "json, name=intValue" })
  intValue?: number;

  @Metadata({ data: "json, name=isNull" })
  isNull?: boolean;

  @Metadata({ data: "json, name=realValue" })
  realValue?: number;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=structValue" })
  structValue?: StructValue;
}
