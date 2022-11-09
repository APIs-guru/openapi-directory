import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ExportBundlePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bundleId" })
  bundleId: string;
}

export enum ExportBundlePlatformEnum {
    Osx = "OSX"
,    Windows = "WINDOWS"
,    Linux = "LINUX"
,    Objc = "OBJC"
,    Swift = "SWIFT"
,    Android = "ANDROID"
,    Javascript = "JAVASCRIPT"
}


export class ExportBundleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=platform" })
  platform?: ExportBundlePlatformEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;
}


export class ExportBundleHeaders extends SpeakeasyBase {
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


export class ExportBundleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ExportBundlePathParams;

  @Metadata()
  queryParams: ExportBundleQueryParams;

  @Metadata()
  headers: ExportBundleHeaders;
}


export class ExportBundleResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: shared.BadRequestException;

  @Metadata()
  contentType: string;

  @Metadata()
  exportBundleResult?: shared.ExportBundleResult;

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
