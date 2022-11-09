import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StartApplicationXAmzTargetEnum {
    KinesisAnalytics20180523StartApplication = "KinesisAnalytics_20180523.StartApplication"
}


export class StartApplicationHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartApplicationXAmzTargetEnum;
}


export class StartApplicationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartApplicationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StartApplicationRequest;
}


export class StartApplicationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidApplicationConfigurationException?: any;

  @Metadata()
  invalidArgumentException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  startApplicationResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
