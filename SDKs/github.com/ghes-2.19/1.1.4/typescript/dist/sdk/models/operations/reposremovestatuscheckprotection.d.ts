import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposRemoveStatusCheckProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRemoveStatusCheckProtectionRequest extends SpeakeasyBase {
    pathParams: ReposRemoveStatusCheckProtectionPathParams;
}
export declare class ReposRemoveStatusCheckProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
