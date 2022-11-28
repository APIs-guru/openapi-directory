import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSelectActionEnum {
    Select = "Select"
}
export declare enum GetSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetSelectQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetSelectActionEnum;
    consistentRead?: boolean;
    nextToken?: string;
    selectExpression: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetSelectVersionEnum;
}
export declare class GetSelectRequest extends SpeakeasyBase {
    queryParams: GetSelectQueryParams;
}
export declare class GetSelectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
