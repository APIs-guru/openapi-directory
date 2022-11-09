import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDimensionKeyDetailsXAmzTargetEnum {
    PerformanceInsightsv20180227GetDimensionKeyDetails = "PerformanceInsightsv20180227.GetDimensionKeyDetails"
}


export class GetDimensionKeyDetailsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDimensionKeyDetailsXAmzTargetEnum;
}


export class GetDimensionKeyDetailsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDimensionKeyDetailsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDimensionKeyDetailsRequest;
}


export class GetDimensionKeyDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDimensionKeyDetailsResponse?: shared.GetDimensionKeyDetailsResponse;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  notAuthorizedException?: any;

  @Metadata()
  statusCode: number;
}
