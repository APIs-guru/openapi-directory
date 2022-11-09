import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateApplicationPresignedUrlXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationPresignedUrl = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"
}


export class CreateApplicationPresignedUrlHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateApplicationPresignedUrlXAmzTargetEnum;
}


export class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateApplicationPresignedUrlHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateApplicationPresignedUrlRequest;
}


export class CreateApplicationPresignedUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createApplicationPresignedUrlResponse?: shared.CreateApplicationPresignedUrlResponse;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
