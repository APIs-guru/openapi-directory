import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FieldToMatch } from "./fieldtomatch";


// LoggingConfiguration
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
**/
export class LoggingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogDestinationConfigs" })
  logDestinationConfigs: string[];

  @Metadata({ data: "json, name=RedactedFields", elemType: shared.FieldToMatch })
  redactedFields?: FieldToMatch[];

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
