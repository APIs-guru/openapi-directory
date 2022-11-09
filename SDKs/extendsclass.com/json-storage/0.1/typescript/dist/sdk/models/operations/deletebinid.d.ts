import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteBinIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteBinIdRequest extends SpeakeasyBase {
    pathParams: DeleteBinIdPathParams;
}
export declare class DeleteBinIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteStatus?: any;
    error?: any;
    statusCode: number;
}
