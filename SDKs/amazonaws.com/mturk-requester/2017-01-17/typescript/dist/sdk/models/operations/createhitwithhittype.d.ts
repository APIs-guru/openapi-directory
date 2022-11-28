import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHitWithHitTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHitWithHitType = "MTurkRequesterServiceV20170117.CreateHITWithHITType"
}
export declare class CreateHitWithHitTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHitWithHitTypeXAmzTargetEnum;
}
export declare class CreateHitWithHitTypeRequest extends SpeakeasyBase {
    headers: CreateHitWithHitTypeHeaders;
    request: shared.CreateHitWithHitTypeRequest;
}
export declare class CreateHitWithHitTypeResponse extends SpeakeasyBase {
    contentType: string;
    createHitWithHitTypeResponse?: shared.CreateHitWithHitTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
