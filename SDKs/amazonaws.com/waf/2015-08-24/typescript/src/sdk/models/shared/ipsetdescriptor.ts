import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpSetDescriptorTypeEnum } from "./ipsetdescriptortypeenum";



// IpSetDescriptor
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Specifies the IP address type (<code>IPV4</code> or <code>IPV6</code>) and the IP address range (in CIDR format) that web requests originate from.</p>
**/
export class IpSetDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: IpSetDescriptorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
