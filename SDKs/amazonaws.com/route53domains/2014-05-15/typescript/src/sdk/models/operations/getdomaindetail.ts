import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetDomainDetailXAmzTargetEnum {
    Route53DomainsV20140515GetDomainDetail = "Route53Domains_v20140515.GetDomainDetail"
}


export class GetDomainDetailHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDomainDetailXAmzTargetEnum;
}


export class GetDomainDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDomainDetailHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetDomainDetailRequest;
}


export class GetDomainDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDomainDetailResponse?: shared.GetDomainDetailResponse;

  @SpeakeasyMetadata()
  invalidInput?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unsupportedTld?: any;
}
