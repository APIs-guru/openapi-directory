import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateOpsItemXAmzTargetEnum {
    AmazonSsmUpdateOpsItem = "AmazonSSM.UpdateOpsItem"
}


export class UpdateOpsItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateOpsItemXAmzTargetEnum;
}


export class UpdateOpsItemRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateOpsItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOpsItemRequest;
}


export class UpdateOpsItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsItemAlreadyExistsException?: any;

  @Metadata()
  opsItemInvalidParameterException?: any;

  @Metadata()
  opsItemLimitExceededException?: any;

  @Metadata()
  opsItemNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOpsItemResponse?: Map<string, any>;
}
