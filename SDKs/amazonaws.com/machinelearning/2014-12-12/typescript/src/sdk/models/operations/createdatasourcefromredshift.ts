import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDataSourceFromRedshiftXAmzTargetEnum {
    AmazonMl20141212CreateDataSourceFromRedshift = "AmazonML_20141212.CreateDataSourceFromRedshift"
}


export class CreateDataSourceFromRedshiftHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDataSourceFromRedshiftXAmzTargetEnum;
}


export class CreateDataSourceFromRedshiftRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDataSourceFromRedshiftHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDataSourceFromRedshiftInput;
}


export class CreateDataSourceFromRedshiftResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDataSourceFromRedshiftOutput?: shared.CreateDataSourceFromRedshiftOutput;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
