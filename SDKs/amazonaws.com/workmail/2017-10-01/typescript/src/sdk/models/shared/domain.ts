import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Domain
/** 
 * <p>The domain to associate with an Amazon WorkMail organization.</p> <p>When you configure a domain hosted in Amazon Route 53 (Route 53), all recommended DNS records are added to the organization when you create it. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;
}
