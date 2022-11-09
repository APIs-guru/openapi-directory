import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSsmAssociateOpsItemRelatedItem = "AmazonSSM.AssociateOpsItemRelatedItem"
}


export class AssociateOpsItemRelatedItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateOpsItemRelatedItemXAmzTargetEnum;
}


export class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateOpsItemRelatedItemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateOpsItemRelatedItemRequest;
}


export class AssociateOpsItemRelatedItemResponse extends SpeakeasyBase {
  @Metadata()
  associateOpsItemRelatedItemResponse?: shared.AssociateOpsItemRelatedItemResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsItemInvalidParameterException?: any;

  @Metadata()
  opsItemLimitExceededException?: any;

  @Metadata()
  opsItemNotFoundException?: any;

  @Metadata()
  opsItemRelatedItemAlreadyExistsException?: any;

  @Metadata()
  statusCode: number;
}
