import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscoverInputSchemaXAmzTargetEnum {
    KinesisAnalytics20150814DiscoverInputSchema = "KinesisAnalytics_20150814.DiscoverInputSchema"
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
    resourceProvisionedThroughputExceededException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unableToDetectSchemaException?: any;
}
