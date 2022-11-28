import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StopAccessLoggingXAmzTargetEnum {
    MediaStore20170901StopAccessLogging = "MediaStore_20170901.StopAccessLogging"
}


export class StopAccessLoggingHeaders extends SpeakeasyBase {
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
  xAmzTarget: StopAccessLoggingXAmzTargetEnum;
}


export class StopAccessLoggingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StopAccessLoggingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StopAccessLoggingInput;
}


export class StopAccessLoggingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerInUseException?: any;

  @SpeakeasyMetadata()
  containerNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopAccessLoggingOutput?: Map<string, any>;
}
