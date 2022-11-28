import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetOpsMetadataXAmzTargetEnum {
    AmazonSsmGetOpsMetadata = "AmazonSSM.GetOpsMetadata"
}


export class GetOpsMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpsMetadataXAmzTargetEnum;
}


export class GetOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetOpsMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetOpsMetadataRequest;
}


export class GetOpsMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOpsMetadataResult?: shared.GetOpsMetadataResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  opsMetadataInvalidArgumentException?: any;

  @SpeakeasyMetadata()
  opsMetadataNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
