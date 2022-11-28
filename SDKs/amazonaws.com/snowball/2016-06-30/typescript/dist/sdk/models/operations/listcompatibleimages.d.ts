import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListCompatibleImagesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceListCompatibleImages = "AWSIESnowballJobManagementService.ListCompatibleImages"
}
export declare class ListCompatibleImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCompatibleImagesXAmzTargetEnum;
}
export declare class ListCompatibleImagesRequest extends SpeakeasyBase {
    headers: ListCompatibleImagesHeaders;
    request: shared.ListCompatibleImagesRequest;
}
export declare class ListCompatibleImagesResponse extends SpeakeasyBase {
    contentType: string;
    ec2RequestFailedException?: any;
    invalidNextTokenException?: any;
    listCompatibleImagesResult?: shared.ListCompatibleImagesResult;
    statusCode: number;
}
