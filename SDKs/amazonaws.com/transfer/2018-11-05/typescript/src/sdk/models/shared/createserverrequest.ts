import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { ProtocolEnum } from "./protocolenum";
import { Tag } from "./tag";
import { WorkflowDetails } from "./workflowdetails";



export class CreateServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @SpeakeasyMetadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=HostKey" })
  hostKey?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
