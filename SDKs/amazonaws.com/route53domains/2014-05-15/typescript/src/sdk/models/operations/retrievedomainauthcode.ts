import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RetrieveDomainAuthCodeXAmzTargetEnum {
    Route53DomainsV20140515RetrieveDomainAuthCode = "Route53Domains_v20140515.RetrieveDomainAuthCode"
}


export class RetrieveDomainAuthCodeHeaders extends SpeakeasyBase {
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
  xAmzTarget: RetrieveDomainAuthCodeXAmzTargetEnum;
}


export class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
  @Metadata()
  headers: RetrieveDomainAuthCodeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RetrieveDomainAuthCodeRequest;
}


export class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  retrieveDomainAuthCodeResponse?: shared.RetrieveDomainAuthCodeResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
