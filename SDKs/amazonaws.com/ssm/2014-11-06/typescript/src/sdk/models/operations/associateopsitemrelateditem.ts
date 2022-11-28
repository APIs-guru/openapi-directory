import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AssociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSsmAssociateOpsItemRelatedItem = "AmazonSSM.AssociateOpsItemRelatedItem"
}


export class AssociateOpsItemRelatedItemHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateOpsItemRelatedItemXAmzTargetEnum;
}


export class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateOpsItemRelatedItemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssociateOpsItemRelatedItemRequest;
}


export class AssociateOpsItemRelatedItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associateOpsItemRelatedItemResponse?: shared.AssociateOpsItemRelatedItemResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  opsItemInvalidParameterException?: any;

  @SpeakeasyMetadata()
  opsItemLimitExceededException?: any;

  @SpeakeasyMetadata()
  opsItemNotFoundException?: any;

  @SpeakeasyMetadata()
  opsItemRelatedItemAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
