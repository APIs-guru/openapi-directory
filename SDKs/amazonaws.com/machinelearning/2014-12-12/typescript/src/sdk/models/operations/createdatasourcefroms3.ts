import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDataSourceFromS3XAmzTargetEnum {
    AmazonMl20141212CreateDataSourceFromS3 = "AmazonML_20141212.CreateDataSourceFromS3"
}


export class CreateDataSourceFromS3Headers extends SpeakeasyBase {
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
  xAmzTarget: CreateDataSourceFromS3XAmzTargetEnum;
}


export class CreateDataSourceFromS3Request extends SpeakeasyBase {
  @Metadata()
  headers: CreateDataSourceFromS3Headers;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDataSourceFromS3Input;
}


export class CreateDataSourceFromS3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDataSourceFromS3Output?: shared.CreateDataSourceFromS3Output;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
