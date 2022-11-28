import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DescribeBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bundleId" })
  bundleId: string;
}


export class DescribeBundleHeaders extends SpeakeasyBase {
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
}


export class DescribeBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DescribeBundlePathParams;

  @SpeakeasyMetadata()
  headers: DescribeBundleHeaders;
}


export class DescribeBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: shared.BadRequestException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  describeBundleResult?: shared.DescribeBundleResult;

  @SpeakeasyMetadata()
  internalFailureException?: shared.InternalFailureException;

  @SpeakeasyMetadata()
  notFoundException?: shared.NotFoundException;

  @SpeakeasyMetadata()
  serviceUnavailableException?: shared.ServiceUnavailableException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: shared.TooManyRequestsException;

  @SpeakeasyMetadata()
  unauthorizedException?: shared.UnauthorizedException;
}
