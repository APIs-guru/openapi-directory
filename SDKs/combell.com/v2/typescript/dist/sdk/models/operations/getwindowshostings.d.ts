import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWindowsHostingsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetWindowsHostingsRequest extends SpeakeasyBase {
    queryParams: GetWindowsHostingsQueryParams;
}
export declare class GetWindowsHostingsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    windowsHostings?: shared.WindowsHosting[];
}
