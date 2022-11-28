import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbSnapshotAttributeActionEnum {
    ModifyDbSnapshotAttribute = "ModifyDBSnapshotAttribute"
}
export declare enum GetModifyDbSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyDbSnapshotAttributeActionEnum;
    attributeName: string;
    dbSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
    version: GetModifyDbSnapshotAttributeVersionEnum;
}
export declare class GetModifyDbSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyDbSnapshotAttributeQueryParams;
    headers: GetModifyDbSnapshotAttributeHeaders;
}
export declare class GetModifyDbSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
