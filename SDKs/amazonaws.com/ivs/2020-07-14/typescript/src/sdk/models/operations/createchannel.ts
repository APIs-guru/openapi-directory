import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateChannelHeaders extends SpeakeasyBase {
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

export enum CreateChannelRequestBodyLatencyModeEnum {
    Normal = "NORMAL"
,    Low = "LOW"
}

export enum CreateChannelRequestBodyTypeEnum {
    Basic = "BASIC"
,    Standard = "STANDARD"
}


export class CreateChannelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized" })
  authorized?: boolean;

  @Metadata({ data: "json, name=latencyMode" })
  latencyMode?: CreateChannelRequestBodyLatencyModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=recordingConfigurationArn" })
  recordingConfigurationArn?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @Metadata({ data: "json, name=type" })
  type?: CreateChannelRequestBodyTypeEnum;
}


export class CreateChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateChannelRequestBody;
}


export class CreateChannelResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createChannelResponse?: shared.CreateChannelResponse;

  @Metadata()
  pendingVerification?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
