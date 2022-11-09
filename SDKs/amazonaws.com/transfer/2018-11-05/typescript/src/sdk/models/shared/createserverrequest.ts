import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainEnum } from "./domainenum";
import { EndpointDetails } from "./endpointdetails";
import { EndpointTypeEnum } from "./endpointtypeenum";
import { IdentityProviderDetails } from "./identityproviderdetails";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
import { ProtocolEnum } from "./protocolenum";
import { Tag } from "./tag";
import { WorkflowDetails } from "./workflowdetails";


export class CreateServerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=Domain" })
  domain?: DomainEnum;

  @Metadata({ data: "json, name=EndpointDetails" })
  endpointDetails?: EndpointDetails;

  @Metadata({ data: "json, name=EndpointType" })
  endpointType?: EndpointTypeEnum;

  @Metadata({ data: "json, name=HostKey" })
  hostKey?: string;

  @Metadata({ data: "json, name=IdentityProviderDetails" })
  identityProviderDetails?: IdentityProviderDetails;

  @Metadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @Metadata({ data: "json, name=LoggingRole" })
  loggingRole?: string;

  @Metadata({ data: "json, name=Protocols" })
  protocols?: ProtocolEnum[];

  @Metadata({ data: "json, name=SecurityPolicyName" })
  securityPolicyName?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=WorkflowDetails" })
  workflowDetails?: WorkflowDetails;
}
