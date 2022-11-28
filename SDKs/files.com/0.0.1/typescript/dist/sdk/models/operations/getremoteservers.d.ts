import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteServersQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetRemoteServersRequest extends SpeakeasyBase {
    queryParams: GetRemoteServersQueryParams;
}
export declare class GetRemoteServersResponse extends SpeakeasyBase {
    contentType: string;
    remoteServerEntities?: shared.RemoteServerEntity[];
    statusCode: number;
}
