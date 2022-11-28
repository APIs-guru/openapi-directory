import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRemoteServersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetRemoteServersIdRequest extends SpeakeasyBase {
    pathParams: GetRemoteServersIdPathParams;
}
export declare class GetRemoteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    remoteServerEntity?: shared.RemoteServerEntity;
    statusCode: number;
}
