import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeoMatchConstraint } from "./geomatchconstraint";


// GeoMatchSet
/** 
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>Contains one or more countries that AWS WAF will search for.</p>
**/
export class GeoMatchSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=GeoMatchConstraints", elemType: shared.GeoMatchConstraint })
  geoMatchConstraints: GeoMatchConstraint[];

  @Metadata({ data: "json, name=GeoMatchSetId" })
  geoMatchSetId: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
