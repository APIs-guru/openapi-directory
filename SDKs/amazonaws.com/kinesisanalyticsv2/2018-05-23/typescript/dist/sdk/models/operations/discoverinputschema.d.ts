import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscoverInputSchemaXAmzTargetEnum {
    KinesisAnalytics20180523DiscoverInputSchema = "KinesisAnalytics_20180523.DiscoverInputSchema"
}
export declare class DiscoverInputSchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverInputSchemaXAmzTargetEnum;
}
export declare class DiscoverInputSchemaRequest extends SpeakeasyBase {
    headers: DiscoverInputSchemaHeaders;
    request: shared.DiscoverInputSchemaRequest;
}
export declare class DiscoverInputSchemaResponse extends SpeakeasyBase {
    contentType: string;
    discoverInputSchemaResponse?: shared.DiscoverInputSchemaResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceProvisionedThroughputExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unableToDetectSchemaException?: any;
}
