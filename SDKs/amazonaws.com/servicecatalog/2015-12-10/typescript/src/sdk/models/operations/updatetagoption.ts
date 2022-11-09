import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateTagOption = "AWS242ServiceCatalogService.UpdateTagOption"
}


export class UpdateTagOptionHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateTagOptionXAmzTargetEnum;
}


export class UpdateTagOptionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateTagOptionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateTagOptionInput;
}


export class UpdateTagOptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tagOptionNotMigratedException?: any;

  @Metadata()
  updateTagOptionOutput?: shared.UpdateTagOptionOutput;
}
