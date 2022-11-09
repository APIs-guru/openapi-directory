import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelJobXAmzTargetEnum {
    AwsieSnowballJobManagementServiceCancelJob = "AWSIESnowballJobManagementService.CancelJob"
}


export class CancelJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelJobXAmzTargetEnum;
}


export class CancelJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelJobRequest;
}


export class CancelJobResponse extends SpeakeasyBase {
  @Metadata()
  cancelJobResult?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidJobStateException?: any;

  @Metadata()
  invalidResourceException?: any;

  @Metadata()
  kmsRequestFailedException?: any;

  @Metadata()
  statusCode: number;
}
