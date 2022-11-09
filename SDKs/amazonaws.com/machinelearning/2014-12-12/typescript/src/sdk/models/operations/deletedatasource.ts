import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteDataSourceXAmzTargetEnum {
    AmazonMl20141212DeleteDataSource = "AmazonML_20141212.DeleteDataSource"
}


export class DeleteDataSourceHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteDataSourceXAmzTargetEnum;
}


export class DeleteDataSourceRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteDataSourceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDataSourceInput;
}


export class DeleteDataSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDataSourceOutput?: shared.DeleteDataSourceOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
