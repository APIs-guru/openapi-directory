import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlarmVolumeRequest extends SpeakeasyBase {
    request: shared.AlarmVolumeRequest;
}
export declare class AlarmVolumeResponse extends SpeakeasyBase {
    contentType: string;
    getvolume?: shared.Getvolume;
    statusCode: number;
}
