import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeNodeAssociationStatusXAmzTargetEnum {
    OpsWorksCmV20161101DescribeNodeAssociationStatus = "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus"
}
export declare class DescribeNodeAssociationStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNodeAssociationStatusXAmzTargetEnum;
}
export declare class DescribeNodeAssociationStatusRequest extends SpeakeasyBase {
    headers: DescribeNodeAssociationStatusHeaders;
    request: shared.DescribeNodeAssociationStatusRequest;
}
export declare class DescribeNodeAssociationStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeNodeAssociationStatusResponse?: shared.DescribeNodeAssociationStatusResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
