import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum RegisterDefaultPatchBaselineXAmzTargetEnum {
    AmazonSsmRegisterDefaultPatchBaseline = "AmazonSSM.RegisterDefaultPatchBaseline"
}


export class RegisterDefaultPatchBaselineHeaders extends SpeakeasyBase {
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
  xAmzTarget: RegisterDefaultPatchBaselineXAmzTargetEnum;
}


export class RegisterDefaultPatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RegisterDefaultPatchBaselineHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegisterDefaultPatchBaselineRequest;
}


export class RegisterDefaultPatchBaselineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doesNotExistException?: any;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidResourceId?: any;

  @SpeakeasyMetadata()
  registerDefaultPatchBaselineResult?: shared.RegisterDefaultPatchBaselineResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
