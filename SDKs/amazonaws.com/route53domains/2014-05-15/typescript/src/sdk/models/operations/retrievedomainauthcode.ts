import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RetrieveDomainAuthCodeXAmzTargetEnum {
    Route53DomainsV20140515RetrieveDomainAuthCode = "Route53Domains_v20140515.RetrieveDomainAuthCode"
}


export class RetrieveDomainAuthCodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: RetrieveDomainAuthCodeXAmzTargetEnum;
}


export class RetrieveDomainAuthCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RetrieveDomainAuthCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RetrieveDomainAuthCodeRequest;
}


export class RetrieveDomainAuthCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  retrieveDomainAuthCodeResponse?: shared.RetrieveDomainAuthCodeResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedTld?: any;
}
