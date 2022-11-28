import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMigrationPathParams extends SpeakeasyBase {
    migrationId: string;
}
export declare class GetMigrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMigrationRequest extends SpeakeasyBase {
    pathParams: GetMigrationPathParams;
    headers: GetMigrationHeaders;
}
export declare class GetMigrationResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getMigrationResponse?: shared.GetMigrationResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
