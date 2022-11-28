import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDisassociateDataShareConsumerActionEnum {
    DisassociateDataShareConsumer = "DisassociateDataShareConsumer"
}
export declare enum PostDisassociateDataShareConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDisassociateDataShareConsumerQueryParams extends SpeakeasyBase {
    action: PostDisassociateDataShareConsumerActionEnum;
    version: PostDisassociateDataShareConsumerVersionEnum;
}
export declare class PostDisassociateDataShareConsumerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisassociateDataShareConsumerRequest extends SpeakeasyBase {
    queryParams: PostDisassociateDataShareConsumerQueryParams;
    headers: PostDisassociateDataShareConsumerHeaders;
    request?: Uint8Array;
}
export declare class PostDisassociateDataShareConsumerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
