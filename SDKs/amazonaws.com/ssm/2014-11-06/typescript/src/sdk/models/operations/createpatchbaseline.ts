import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePatchBaselineXAmzTargetEnum {
    AmazonSsmCreatePatchBaseline = "AmazonSSM.CreatePatchBaseline"
}


export class CreatePatchBaselineHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreatePatchBaselineXAmzTargetEnum;
}


export class CreatePatchBaselineRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreatePatchBaselineHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreatePatchBaselineRequest;
}


export class CreatePatchBaselineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPatchBaselineResult?: shared.CreatePatchBaselineResult;

  @Metadata()
  idempotentParameterMismatch?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  resourceLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
