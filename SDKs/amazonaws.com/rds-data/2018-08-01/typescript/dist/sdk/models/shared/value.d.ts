import { SpeakeasyBase } from "../../../internal/utils";
import { StructValue } from "./structvalue";
/**
 * <p>Contains the value of a column.</p> <pre><code> &lt;important&gt; &lt;p&gt;This data type is deprecated.&lt;/p&gt; &lt;/important&gt; </code></pre>
**/
export declare class Value extends SpeakeasyBase {
    arrayValues?: Value[];
    bigIntValue?: number;
    bitValue?: boolean;
    blobValue?: string;
    doubleValue?: number;
    intValue?: number;
    isNull?: boolean;
    realValue?: number;
    stringValue?: string;
    structValue?: StructValue;
}
