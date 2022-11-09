import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssociateDataShareConsumerActionEnum {
    AssociateDataShareConsumer = "AssociateDataShareConsumer"
}
export declare enum PostAssociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAssociateDataShareConsumerQueryParams extends SpeakeasyBase {
    action: PostAssociateDataShareConsumerActionEnum;
    version: PostAssociateDataShareConsumerVersionEnum;
}
export declare class PostAssociateDataShareConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssociateDataShareConsumerRequest extends SpeakeasyBase {
    queryParams: PostAssociateDataShareConsumerQueryParams;
    headers: PostAssociateDataShareConsumerHeaders;
    request?: Uint8Array;
}
export declare class PostAssociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
