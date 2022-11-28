import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishLayerVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;
}


export class PublishLayerVersionHeaders extends SpeakeasyBase {
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


// PublishLayerVersionRequestBodyContent
/** 
 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
**/
export class PublishLayerVersionRequestBodyContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @SpeakeasyMetadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


export class PublishLayerVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: shared.RuntimeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: PublishLayerVersionRequestBodyContent;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;
}


export class PublishLayerVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishLayerVersionPathParams;

  @SpeakeasyMetadata()
  headers: PublishLayerVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PublishLayerVersionRequestBody;
}


export class PublishLayerVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codeStorageExceededException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  @SpeakeasyMetadata()
  publishLayerVersionResponse?: shared.PublishLayerVersionResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
