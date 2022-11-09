import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateImportJobHeaders extends SpeakeasyBase {
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
}


// CreateImportJobRequestBodyImportDataSource
/** 
 * An object that contains details about the data source of the import job.
**/
export class CreateImportJobRequestBodyImportDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataFormat" })
  dataFormat?: shared.DataFormatEnum;

  @Metadata({ data: "json, name=S3Url" })
  s3Url?: string;
}


// CreateImportJobRequestBodyImportDestination
/** 
 * An object that contains details about the resource destination the import job is going to target.
**/
export class CreateImportJobRequestBodyImportDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactListDestination" })
  contactListDestination?: shared.ContactListDestination;

  @Metadata({ data: "json, name=SuppressionListDestination" })
  suppressionListDestination?: shared.SuppressionListDestination;
}


export class CreateImportJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImportDataSource" })
  importDataSource: CreateImportJobRequestBodyImportDataSource;

  @Metadata({ data: "json, name=ImportDestination" })
  importDestination: CreateImportJobRequestBodyImportDestination;
}


export class CreateImportJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateImportJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateImportJobRequestBody;
}


export class CreateImportJobResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createImportJobResponse?: shared.CreateImportJobResponse;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
