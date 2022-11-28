import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructValue } from "./structvalue";



// Value
/** 
 * <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
export class Value extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValues", elemType: Value })
  arrayValues?: Value[];

  @SpeakeasyMetadata({ data: "json, name=bigIntValue" })
  bigIntValue?: number;

  @SpeakeasyMetadata({ data: "json, name=bitValue" })
  bitValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blobValue" })
  blobValue?: string;

  @SpeakeasyMetadata({ data: "json, name=doubleValue" })
  doubleValue?: number;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: number;

  @SpeakeasyMetadata({ data: "json, name=isNull" })
  isNull?: boolean;

  @SpeakeasyMetadata({ data: "json, name=realValue" })
  realValue?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=structValue" })
  structValue?: StructValue;
}
