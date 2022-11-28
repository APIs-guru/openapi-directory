import { SpeakeasyBase } from "../../../internal/utils";
export declare class MigrationsCancelImportPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class MigrationsCancelImportRequest extends SpeakeasyBase {
    pathParams: MigrationsCancelImportPathParams;
}
export declare class MigrationsCancelImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
