import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RegisterDomainXAmzTargetEnum {
    Route53DomainsV20140515RegisterDomain = "Route53Domains_v20140515.RegisterDomain"
}


export class RegisterDomainHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RegisterDomainXAmzTargetEnum;
}


export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata()
  headers: RegisterDomainHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterDomainRequest;
}


export class RegisterDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domainLimitExceeded?: any;

  @Metadata()
  duplicateRequest?: any;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  operationLimitExceeded?: any;

  @Metadata()
  registerDomainResponse?: shared.RegisterDomainResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tldRulesViolation?: any;

  @Metadata()
  unsupportedTld?: any;
}
