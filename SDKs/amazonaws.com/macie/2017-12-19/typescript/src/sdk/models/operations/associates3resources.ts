import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AssociateS3ResourcesXAmzTargetEnum {
    MacieServiceAssociateS3Resources = "MacieService.AssociateS3Resources"
}


export class AssociateS3ResourcesHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateS3ResourcesXAmzTargetEnum;
}


export class AssociateS3ResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AssociateS3ResourcesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssociateS3ResourcesRequest;
}


export class AssociateS3ResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  associateS3ResourcesResult?: shared.AssociateS3ResourcesResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
