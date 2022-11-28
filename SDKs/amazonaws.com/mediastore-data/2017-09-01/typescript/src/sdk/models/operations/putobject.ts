import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutObjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Path" })
  path: string;
}

export enum PutObjectXAmzStorageClassEnum {
    Temporal = "TEMPORAL"
}

export enum PutObjectXAmzUploadAvailabilityEnum {
    Standard = "STANDARD",
    Streaming = "STREAMING"
}


export class PutObjectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Cache-Control" })
  cacheControl?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Type" })
  contentType?: string;

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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-storage-class" })
  xAmzStorageClass?: PutObjectXAmzStorageClassEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-amz-upload-availability" })
  xAmzUploadAvailability?: PutObjectXAmzUploadAvailabilityEnum;
}


export class PutObjectRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body: string;
}


export class PutObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutObjectPathParams;

  @SpeakeasyMetadata()
  headers: PutObjectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutObjectRequestBody;
}


export class PutObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containerNotFoundException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  putObjectResponse?: shared.PutObjectResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
