import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum StartMailboxExportJobXAmzTargetEnum {
    WorkMailServiceStartMailboxExportJob = "WorkMailService.StartMailboxExportJob"
}


export class StartMailboxExportJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: StartMailboxExportJobXAmzTargetEnum;
}


export class StartMailboxExportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartMailboxExportJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartMailboxExportJobRequest;
}


export class StartMailboxExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityNotFoundException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  organizationNotFoundException?: any;

  @SpeakeasyMetadata()
  organizationStateException?: any;

  @SpeakeasyMetadata()
  startMailboxExportJobResponse?: shared.StartMailboxExportJobResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
