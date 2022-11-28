import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyDbClusterSnapshotAttributeActionEnum {
    ModifyDbClusterSnapshotAttribute = "ModifyDBClusterSnapshotAttribute"
}
export declare enum GetModifyDbClusterSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbClusterSnapshotAttributeQueryParams extends SpeakeasyBase {
    action: GetModifyDbClusterSnapshotAttributeActionEnum;
    attributeName: string;
    dbClusterSnapshotIdentifier: string;
    valuesToAdd?: string[];
    valuesToRemove?: string[];
    version: GetModifyDbClusterSnapshotAttributeVersionEnum;
}
export declare class GetModifyDbClusterSnapshotAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbClusterSnapshotAttributeRequest extends SpeakeasyBase {
    queryParams: GetModifyDbClusterSnapshotAttributeQueryParams;
    headers: GetModifyDbClusterSnapshotAttributeHeaders;
}
export declare class GetModifyDbClusterSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
