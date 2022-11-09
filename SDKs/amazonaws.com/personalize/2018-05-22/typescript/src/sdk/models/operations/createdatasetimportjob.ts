import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateDatasetImportJobXAmzTargetEnum {
    AmazonPersonalizeCreateDatasetImportJob = "AmazonPersonalize.CreateDatasetImportJob"
}


export class CreateDatasetImportJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateDatasetImportJobXAmzTargetEnum;
}


export class CreateDatasetImportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateDatasetImportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateDatasetImportJobRequest;
}


export class CreateDatasetImportJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createDatasetImportJobResponse?: shared.CreateDatasetImportJobResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
