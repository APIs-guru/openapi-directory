import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostVolumesFsCreateHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class PostVolumesFsCreateRequest extends SpeakeasyBase {
    headers: PostVolumesFsCreateHeaders;
    request: shared.FileshareParam;
}
export declare class PostVolumesFsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
