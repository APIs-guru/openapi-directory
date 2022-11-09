import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDomainDetailXAmzTargetEnum {
    Route53DomainsV20140515GetDomainDetail = "Route53Domains_v20140515.GetDomainDetail"
}


export class GetDomainDetailHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDomainDetailXAmzTargetEnum;
}


export class GetDomainDetailRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDomainDetailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDomainDetailRequest;
}


export class GetDomainDetailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDomainDetailResponse?: shared.GetDomainDetailResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unsupportedTld?: any;
}
