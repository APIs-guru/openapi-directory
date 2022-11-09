import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateOpsItemXAmzTargetEnum {
    AmazonSsmCreateOpsItem = "AmazonSSM.CreateOpsItem"
}


export class CreateOpsItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateOpsItemXAmzTargetEnum;
}


export class CreateOpsItemRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateOpsItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateOpsItemRequest;
}


export class CreateOpsItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createOpsItemResponse?: shared.CreateOpsItemResponse;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsItemAlreadyExistsException?: any;

  @Metadata()
  opsItemInvalidParameterException?: any;

  @Metadata()
  opsItemLimitExceededException?: any;

  @Metadata()
  statusCode: number;
}
