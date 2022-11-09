import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PublishLayerVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=LayerName" })
  layerName: string;
}


export class PublishLayerVersionHeaders extends SpeakeasyBase {
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


// PublishLayerVersionRequestBodyContent
/** 
 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
**/
export class PublishLayerVersionRequestBodyContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket?: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;

  @Metadata({ data: "json, name=S3ObjectVersion" })
  s3ObjectVersion?: string;

  @Metadata({ data: "json, name=ZipFile" })
  zipFile?: string;
}


export class PublishLayerVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompatibleRuntimes" })
  compatibleRuntimes?: shared.RuntimeEnum[];

  @Metadata({ data: "json, name=Content" })
  content: PublishLayerVersionRequestBodyContent;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LicenseInfo" })
  licenseInfo?: string;
}


export class PublishLayerVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishLayerVersionPathParams;

  @Metadata()
  headers: PublishLayerVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PublishLayerVersionRequestBody;
}


export class PublishLayerVersionResponse extends SpeakeasyBase {
  @Metadata()
  codeStorageExceededException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterValueException?: any;

  @Metadata()
  publishLayerVersionResponse?: shared.PublishLayerVersionResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
