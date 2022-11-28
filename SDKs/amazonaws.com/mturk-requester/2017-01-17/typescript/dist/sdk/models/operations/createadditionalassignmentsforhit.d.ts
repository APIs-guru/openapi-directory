import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAdditionalAssignmentsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHit = "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
}
export declare class CreateAdditionalAssignmentsForHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAdditionalAssignmentsForHitxAmzTargetEnum;
}
export declare class CreateAdditionalAssignmentsForHitRequest extends SpeakeasyBase {
    headers: CreateAdditionalAssignmentsForHitHeaders;
    request: shared.CreateAdditionalAssignmentsForHitRequest;
}
export declare class CreateAdditionalAssignmentsForHitResponse extends SpeakeasyBase {
    contentType: string;
    createAdditionalAssignmentsForHitResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
