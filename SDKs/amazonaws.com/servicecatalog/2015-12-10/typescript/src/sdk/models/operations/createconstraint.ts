import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateConstraint = "AWS242ServiceCatalogService.CreateConstraint"
}


export class CreateConstraintHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateConstraintXAmzTargetEnum;
}


export class CreateConstraintRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateConstraintHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateConstraintInput;
}


export class CreateConstraintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createConstraintOutput?: shared.CreateConstraintOutput;

  @Metadata()
  duplicateResourceException?: any;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
