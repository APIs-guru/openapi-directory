import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRawBrandFranchisesPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetRawBrandFranchisesRequest extends SpeakeasyBase {
    pathParams: GetRawBrandFranchisesPathParams;
}
export declare class GetRawBrandFranchisesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    nitro?: any;
}
