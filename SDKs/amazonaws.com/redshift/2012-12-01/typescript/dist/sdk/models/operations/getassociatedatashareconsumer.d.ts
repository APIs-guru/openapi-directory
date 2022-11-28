import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}
export declare enum GetAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAssociateDataShareConsumerQueryParams extends SpeakeasyBase {
    action: GetAssociateDataShareConsumerActionEnum;
    associateEntireAccount?: boolean;
    consumerArn?: string;
    dataShareArn: string;
    version: GetAssociateDataShareConsumerVersionEnum;
}
export declare class GetAssociateDataShareConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAssociateDataShareConsumerRequest extends SpeakeasyBase {
    queryParams: GetAssociateDataShareConsumerQueryParams;
    headers: GetAssociateDataShareConsumerHeaders;
}
export declare class GetAssociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
