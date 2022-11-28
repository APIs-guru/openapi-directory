import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImportJobHeaders extends SpeakeasyBase {
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
}


// CreateImportJobRequestBodyImportDataSource
/** 
 * An object that contains details about the data source of the import job.
**/
export class CreateImportJobRequestBodyImportDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataFormat" })
  dataFormat?: shared.DataFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Url" })
  s3Url?: string;
}


// CreateImportJobRequestBodyImportDestination
/** 
 * An object that contains details about the resource destination the import job is going to target.
**/
export class CreateImportJobRequestBodyImportDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactListDestination" })
  contactListDestination?: shared.ContactListDestination;

  @SpeakeasyMetadata({ data: "json, name=SuppressionListDestination" })
  suppressionListDestination?: shared.SuppressionListDestination;
}


export class CreateImportJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImportDataSource" })
  importDataSource: CreateImportJobRequestBodyImportDataSource;

  @SpeakeasyMetadata({ data: "json, name=ImportDestination" })
  importDestination: CreateImportJobRequestBodyImportDestination;
}


export class CreateImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateImportJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateImportJobRequestBody;
}


export class CreateImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createImportJobResponse?: shared.CreateImportJobResponse;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
