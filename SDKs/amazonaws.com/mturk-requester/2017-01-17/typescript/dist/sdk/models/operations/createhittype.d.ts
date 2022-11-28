import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHitTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHitType = "MTurkRequesterServiceV20170117.CreateHITType"
}
export declare class CreateHitTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHitTypeXAmzTargetEnum;
}
export declare class CreateHitTypeRequest extends SpeakeasyBase {
    headers: CreateHitTypeHeaders;
    request: shared.CreateHitTypeRequest;
}
export declare class CreateHitTypeResponse extends SpeakeasyBase {
    contentType: string;
    createHitTypeResponse?: shared.CreateHitTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
