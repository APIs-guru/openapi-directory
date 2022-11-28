import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorldGenerationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
**/
export declare class CreateWorldGenerationJobRequestBodyWorldCount extends SpeakeasyBase {
    floorplanCount?: number;
    interiorCountPerFloorplan?: number;
}
export declare class CreateWorldGenerationJobRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    tags?: Map<string, string>;
    template: string;
    worldCount: CreateWorldGenerationJobRequestBodyWorldCount;
    worldTags?: Map<string, string>;
}
export declare class CreateWorldGenerationJobRequest extends SpeakeasyBase {
    headers: CreateWorldGenerationJobHeaders;
    request: CreateWorldGenerationJobRequestBody;
}
export declare class CreateWorldGenerationJobResponse extends SpeakeasyBase {
    contentType: string;
    createWorldGenerationJobResponse?: shared.CreateWorldGenerationJobResponse;
    idempotentParameterMismatchException?: any;
    internalServerException?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
