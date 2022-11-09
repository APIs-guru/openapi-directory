import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateTagOption = "AWS242ServiceCatalogService.CreateTagOption"
}


export class CreateTagOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateTagOptionXAmzTargetEnum;
}


export class CreateTagOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTagOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTagOptionInput;
}


export class CreateTagOptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTagOptionOutput?: shared.CreateTagOptionOutput;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagOptionNotMigratedException?: any;
}
