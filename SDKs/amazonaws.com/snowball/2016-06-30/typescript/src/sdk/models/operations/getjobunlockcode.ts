import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetJobUnlockCodeXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetJobUnlockCode = "AWSIESnowballJobManagementService.GetJobUnlockCode"
}


export class GetJobUnlockCodeHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetJobUnlockCodeXAmzTargetEnum;
}


export class GetJobUnlockCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetJobUnlockCodeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetJobUnlockCodeRequest;
}


export class GetJobUnlockCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJobUnlockCodeResult?: shared.GetJobUnlockCodeResult;

  @SpeakeasyMetadata()
  invalidJobStateException?: any;

  @SpeakeasyMetadata()
  invalidResourceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
