import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportBundlePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bundleId" })
  bundleId: string;
}

export enum ExportBundlePlatformEnum {
    Osx = "OSX",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Objc = "OBJC",
    Swift = "SWIFT",
    Android = "ANDROID",
    Javascript = "JAVASCRIPT"
}


export class ExportBundleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: ExportBundlePlatformEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;
}


export class ExportBundleHeaders extends SpeakeasyBase {
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


export class ExportBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportBundlePathParams;

  @SpeakeasyMetadata()
  queryParams: ExportBundleQueryParams;

  @SpeakeasyMetadata()
  headers: ExportBundleHeaders;
}


export class ExportBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: shared.BadRequestException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  exportBundleResult?: shared.ExportBundleResult;

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
