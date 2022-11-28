import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinuxHostingsQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetLinuxHostingsRequest extends SpeakeasyBase {
    queryParams: GetLinuxHostingsQueryParams;
}
export declare class GetLinuxHostingsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    linuxHostings?: shared.LinuxHosting[];
    statusCode: number;
}
