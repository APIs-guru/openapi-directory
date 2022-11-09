import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVolumesFsJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetVolumesFsJsonRequest extends SpeakeasyBase {
    headers: GetVolumesFsJsonHeaders;
}
export declare class GetVolumesFsJsonResponse extends SpeakeasyBase {
    contentType: string;
    fileshares?: shared.Fileshare[];
    statusCode: number;
}
