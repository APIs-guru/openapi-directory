import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutObjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Path" })
  path: string;
}

export enum PutObjectXAmzStorageClassEnum {
    Temporal = "TEMPORAL"
}

export enum PutObjectXAmzUploadAvailabilityEnum {
    Standard = "STANDARD"
,    Streaming = "STREAMING"
}


export class PutObjectHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Cache-Control" })
  cacheControl?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

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

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-storage-class" })
  xAmzStorageClass?: PutObjectXAmzStorageClassEnum;

  @Metadata({ data: "header, style=simple;explode=false;name=x-amz-upload-availability" })
  xAmzUploadAvailability?: PutObjectXAmzUploadAvailabilityEnum;
}


export class PutObjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body: string;
}


export class PutObjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutObjectPathParams;

  @Metadata()
  headers: PutObjectHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutObjectRequestBody;
}


export class PutObjectResponse extends SpeakeasyBase {
  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  putObjectResponse?: shared.PutObjectResponse;

  @Metadata()
  statusCode: number;
}
