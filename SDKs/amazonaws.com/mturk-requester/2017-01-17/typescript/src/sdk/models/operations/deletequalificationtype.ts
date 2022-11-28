import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteQualificationType = "MTurkRequesterServiceV20170117.DeleteQualificationType"
}


export class DeleteQualificationTypeHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteQualificationTypeXAmzTargetEnum;
}


export class DeleteQualificationTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteQualificationTypeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteQualificationTypeRequest;
}


export class DeleteQualificationTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteQualificationTypeResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
