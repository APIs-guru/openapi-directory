import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishLayerVersionPathParams extends SpeakeasyBase {
    layerName: string;
}
export declare class PublishLayerVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.
**/
export declare class PublishLayerVersionRequestBodyContent extends SpeakeasyBase {
    s3Bucket?: string;
    s3Key?: string;
    s3ObjectVersion?: string;
    zipFile?: string;
}
export declare class PublishLayerVersionRequestBody extends SpeakeasyBase {
    compatibleRuntimes?: shared.RuntimeEnum[];
    content: PublishLayerVersionRequestBodyContent;
    description?: string;
    licenseInfo?: string;
}
export declare class PublishLayerVersionRequest extends SpeakeasyBase {
    pathParams: PublishLayerVersionPathParams;
    headers: PublishLayerVersionHeaders;
    request: PublishLayerVersionRequestBody;
}
export declare class PublishLayerVersionResponse extends SpeakeasyBase {
    codeStorageExceededException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    publishLayerVersionResponse?: shared.PublishLayerVersionResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
