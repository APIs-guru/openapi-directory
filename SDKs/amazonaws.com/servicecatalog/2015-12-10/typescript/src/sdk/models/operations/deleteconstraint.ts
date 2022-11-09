import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteConstraintXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteConstraint = "AWS242ServiceCatalogService.DeleteConstraint"
}


export class DeleteConstraintHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteConstraintXAmzTargetEnum;
}


export class DeleteConstraintRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteConstraintHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteConstraintInput;
}


export class DeleteConstraintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteConstraintOutput?: Map<string, any>;

  @Metadata()
  invalidParametersException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
