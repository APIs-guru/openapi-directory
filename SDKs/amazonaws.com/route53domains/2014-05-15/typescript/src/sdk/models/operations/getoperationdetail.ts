import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOperationDetailXAmzTargetEnum {
    Route53DomainsV20140515GetOperationDetail = "Route53Domains_v20140515.GetOperationDetail"
}


export class GetOperationDetailHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOperationDetailXAmzTargetEnum;
}


export class GetOperationDetailRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOperationDetailHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOperationDetailRequest;
}


export class GetOperationDetailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOperationDetailResponse?: shared.GetOperationDetailResponse;

  @Metadata()
  invalidInput?: any;

  @Metadata()
  statusCode: number;
}
