import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldToMatch } from "./fieldtomatch";
import { PositionalConstraintEnum } from "./positionalconstraintenum";
import { TextTransformationEnum } from "./texttransformationenum";


// ByteMatchTuple
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to search for in web requests, the location in requests that you want AWS WAF to search, and other settings.</p>
**/
export class ByteMatchTuple extends SpeakeasyBase {
  @Metadata({ data: "json, name=FieldToMatch" })
  fieldToMatch: FieldToMatch;

  @Metadata({ data: "json, name=PositionalConstraint" })
  positionalConstraint: PositionalConstraintEnum;

  @Metadata({ data: "json, name=TargetString" })
  targetString: string;

  @Metadata({ data: "json, name=TextTransformation" })
  textTransformation: TextTransformationEnum;
}
