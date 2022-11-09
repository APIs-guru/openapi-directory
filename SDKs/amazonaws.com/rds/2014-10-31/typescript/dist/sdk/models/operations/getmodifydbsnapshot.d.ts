import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyDbSnapshotActionEnum {
    ModifyDbSnapshot = "ModifyDBSnapshot"
}
export declare enum GetModifyDbSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbSnapshotQueryParams extends SpeakeasyBase {
    action: GetModifyDbSnapshotActionEnum;
    dbSnapshotIdentifier: string;
    engineVersion?: string;
    optionGroupName?: string;
    version: GetModifyDbSnapshotVersionEnum;
}
export declare class GetModifyDbSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbSnapshotRequest extends SpeakeasyBase {
    queryParams: GetModifyDbSnapshotQueryParams;
    headers: GetModifyDbSnapshotHeaders;
}
export declare class GetModifyDbSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
