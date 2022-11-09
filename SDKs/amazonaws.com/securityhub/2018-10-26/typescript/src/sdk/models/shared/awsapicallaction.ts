import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsApiCallActionDomainDetails } from "./awsapicallactiondomaindetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";


// AwsApiCallAction
/** 
 * Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
**/
export class AwsApiCallAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=AffectedResources" })
  affectedResources?: Map<string, string>;

  @Metadata({ data: "json, name=Api" })
  api?: string;

  @Metadata({ data: "json, name=CallerType" })
  callerType?: string;

  @Metadata({ data: "json, name=DomainDetails" })
  domainDetails?: AwsApiCallActionDomainDetails;

  @Metadata({ data: "json, name=FirstSeen" })
  firstSeen?: string;

  @Metadata({ data: "json, name=LastSeen" })
  lastSeen?: string;

  @Metadata({ data: "json, name=RemoteIpDetails" })
  remoteIpDetails?: ActionRemoteIpDetails;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
