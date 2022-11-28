import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDisassociateDataShareConsumerActionEnum {
    DisassociateDataShareConsumer = "DisassociateDataShareConsumer"
}
export declare enum GetDisassociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDisassociateDataShareConsumerQueryParams extends SpeakeasyBase {
    action: GetDisassociateDataShareConsumerActionEnum;
    consumerArn?: string;
    dataShareArn: string;
    disassociateEntireAccount?: boolean;
    version: GetDisassociateDataShareConsumerVersionEnum;
}
export declare class GetDisassociateDataShareConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDisassociateDataShareConsumerRequest extends SpeakeasyBase {
    queryParams: GetDisassociateDataShareConsumerQueryParams;
    headers: GetDisassociateDataShareConsumerHeaders;
}
export declare class GetDisassociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
