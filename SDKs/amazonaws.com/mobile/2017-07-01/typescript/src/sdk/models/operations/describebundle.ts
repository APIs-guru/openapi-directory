import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bundleId" })
  bundleId: string;
}


export class DescribeBundleHeaders extends SpeakeasyBase {
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
}


export class DescribeBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeBundlePathParams;

  @Metadata()
  headers: DescribeBundleHeaders;
}


export class DescribeBundleResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: shared.BadRequestException;

  @Metadata()
  contentType: string;

  @Metadata()
  describeBundleResult?: shared.DescribeBundleResult;

  @Metadata()
  internalFailureException?: shared.InternalFailureException;

  @Metadata()
  notFoundException?: shared.NotFoundException;

  @Metadata()
  serviceUnavailableException?: shared.ServiceUnavailableException;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: shared.TooManyRequestsException;

  @Metadata()
  unauthorizedException?: shared.UnauthorizedException;
}
