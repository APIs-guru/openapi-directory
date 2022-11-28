import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribePatchGroupStateXAmzTargetEnum {
    AmazonSsmDescribePatchGroupState = "AmazonSSM.DescribePatchGroupState"
}
export declare class DescribePatchGroupStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchGroupStateXAmzTargetEnum;
}
export declare class DescribePatchGroupStateRequest extends SpeakeasyBase {
    headers: DescribePatchGroupStateHeaders;
    request: shared.DescribePatchGroupStateRequest;
}
export declare class DescribePatchGroupStateResponse extends SpeakeasyBase {
    contentType: string;
    describePatchGroupStateResult?: shared.DescribePatchGroupStateResult;
    internalServerError?: any;
    invalidNextToken?: any;
    statusCode: number;
}
