import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsApiCallActionDomainDetails } from "./awsapicallactiondomaindetails";
import { ActionRemoteIpDetails } from "./actionremoteipdetails";



// AwsApiCallAction
/** 
 * Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
**/
export class AwsApiCallAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AffectedResources" })
  affectedResources?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Api" })
  api?: string;

  @SpeakeasyMetadata({ data: "json, name=CallerType" })
  callerType?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainDetails" })
  domainDetails?: AwsApiCallActionDomainDetails;

  @SpeakeasyMetadata({ data: "json, name=FirstSeen" })
  firstSeen?: string;

  @SpeakeasyMetadata({ data: "json, name=LastSeen" })
  lastSeen?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteIpDetails" })
  remoteIpDetails?: ActionRemoteIpDetails;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;
}
