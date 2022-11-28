import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAssociationXAmzTargetEnum {
    AmazonSsmDescribeAssociation = "AmazonSSM.DescribeAssociation"
}
export declare class DescribeAssociationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssociationXAmzTargetEnum;
}
export declare class DescribeAssociationRequest extends SpeakeasyBase {
    headers: DescribeAssociationHeaders;
    request: shared.DescribeAssociationRequest;
}
export declare class DescribeAssociationResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    describeAssociationResult?: shared.DescribeAssociationResult;
    internalServerError?: any;
    invalidAssociationVersion?: any;
    invalidDocument?: any;
    invalidInstanceId?: any;
    statusCode: number;
}
