import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbSnapshotAttributeActionEnum {
    ModifyDbSnapshotAttribute = "ModifyDBSnapshotAttribute"
}
export declare enum PostModifyDbSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: PostModifyDbSnapshotAttributeActionEnum;
    version: PostModifyDbSnapshotAttributeVersionEnum;
}
export declare class PostModifyDbSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: PostModifyDbSnapshotAttributeQueryParams;
    headers: PostModifyDbSnapshotAttributeHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
