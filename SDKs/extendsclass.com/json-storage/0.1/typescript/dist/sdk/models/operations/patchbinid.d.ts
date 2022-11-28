import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchBinIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchBinIdRequest extends SpeakeasyBase {
    pathParams: PatchBinIdPathParams;
}
export declare class PatchBinIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
    updateStatus?: any;
}
